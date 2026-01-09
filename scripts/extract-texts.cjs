/**
 * Extract texts for ElevenLabs - Simple Node.js script
 */

const fs = require('fs');
const path = require('path');

const exportDir = path.join(__dirname, '..', 'elevenlabs-export');

// Ensure export directory exists
if (!fs.existsSync(exportDir)) {
  fs.mkdirSync(exportDir, { recursive: true });
}

// Read source files as text
const scenariosFile = fs.readFileSync(path.join(__dirname, '..', 'src/data/scenarios.ts'), 'utf8');
const chunksFile = fs.readFileSync(path.join(__dirname, '..', 'src/data/chunks.ts'), 'utf8');
const shadowingFile = fs.readFileSync(path.join(__dirname, '..', 'src/data/shadowingContent.ts'), 'utf8');

// Better text extraction that handles escaped quotes
function extractStringValue(content, startIndex) {
  let char = content[startIndex];
  let quote = char;
  let result = '';
  let i = startIndex + 1;

  while (i < content.length) {
    char = content[i];
    if (char === '\\' && i + 1 < content.length) {
      // Handle escape sequences
      result += content[i + 1];
      i += 2;
    } else if (char === quote) {
      break;
    } else {
      result += char;
      i++;
    }
  }
  return result;
}

// Extract scenario agent dialogues
function extractScenarioTexts(content) {
  const items = [];
  const seenIds = new Set();

  // Find scenario blocks that start with id and have a title field (distinguishes from dialogue turns)
  const scenarioBlockPattern = /{\s*\n\s*id:\s*'([^']+)',\s*\n\s*title:/g;

  for (const match of content.matchAll(scenarioBlockPattern)) {
    const scenarioId = match[1];

    // Skip if not a proper scenario ID (has underscore and digits at end)
    if (!/_\d{3}$/.test(scenarioId)) continue;

    // Find the end of this scenario block
    let braceCount = 1;
    let startPos = match.index + 1;
    let pos = startPos;

    while (pos < content.length && braceCount > 0) {
      if (content[pos] === '{') braceCount++;
      if (content[pos] === '}') braceCount--;
      pos++;
    }

    const scenarioBlock = content.slice(match.index, pos);

    // Find agent dialogues in this block
    const turnPattern = /id:\s*'(turn_\d+)',\s*\n\s*role:\s*'agent',\s*\n\s*text:\s*'/g;
    let turnMatch;

    while ((turnMatch = turnPattern.exec(scenarioBlock)) !== null) {
      const turnId = turnMatch[1];
      const textStartIndex = turnMatch.index + turnMatch[0].length;

      // Extract text value (handle escaped quotes)
      let text = '';
      let i = textStartIndex;
      while (i < scenarioBlock.length) {
        const char = scenarioBlock[i];
        if (char === '\\' && i + 1 < scenarioBlock.length) {
          text += scenarioBlock[i + 1];
          i += 2;
        } else if (char === "'") {
          break;
        } else {
          text += char;
          i++;
        }
      }

      const uniqueId = `${scenarioId}_${turnId}`;
      if (text && !seenIds.has(uniqueId)) {
        seenIds.add(uniqueId);
        items.push({
          id: uniqueId,
          filename: `scenarios/${scenarioId}/${turnId}.mp3`,
          text: text,
          category: 'scenario',
          scenarioId: scenarioId
        });
      }
    }
  }

  return items;
}

// Extract chunk texts
function extractChunkTexts(content) {
  const items = [];

  // Match chunk entries - chunks use double quotes (may contain apostrophes)
  const chunkPattern = /id:\s*'([^']+)'[\s\S]*?chunk:\s*"([^"]+)"/g;
  let match;

  while ((match = chunkPattern.exec(content)) !== null) {
    items.push({
      id: match[1],
      filename: `chunks/${match[1]}.mp3`,
      text: match[2],
      category: 'chunk'
    });
  }

  return items;
}

// Extract shadowing texts
function extractShadowingTexts(content) {
  const items = [];

  // Match shadowing entries - text uses double quotes (may contain apostrophes)
  const shadowPattern = /id:\s*(\d+),\s*\n\s*text:\s*"([^"]+)"/g;
  let match;

  while ((match = shadowPattern.exec(content)) !== null) {
    items.push({
      id: `shadowing_${match[1]}`,
      filename: `shadowing/shadowing_${match[1]}.mp3`,
      text: match[2],
      category: 'shadowing'
    });
  }

  return items;
}

// Main
console.log('Extracting texts for ElevenLabs...\n');

const scenarioItems = extractScenarioTexts(scenariosFile);
const chunkItems = extractChunkTexts(chunksFile);
const shadowingItems = extractShadowingTexts(shadowingFile);

console.log(`Found ${scenarioItems.length} scenario agent dialogues`);
console.log(`Found ${chunkItems.length} chunks`);
console.log(`Found ${shadowingItems.length} shadowing items`);

const allItems = [...scenarioItems, ...chunkItems, ...shadowingItems];
const totalChars = allItems.reduce((sum, item) => sum + item.text.length, 0);

// Write JSON export
fs.writeFileSync(
  path.join(exportDir, 'all-content.json'),
  JSON.stringify(allItems, null, 2)
);

// Write simple text file for ElevenLabs
let textContent = `# ElevenLabs Audio Generation List
# Total items: ${allItems.length}
# Total characters: ${totalChars.toLocaleString()}
# Estimated cost: ~$${(totalChars * 0.00003).toFixed(2)} (at $0.30 per 1000 chars)

========================================
SCENARIOS (Agent dialogues)
Total: ${scenarioItems.length} items
========================================

`;

scenarioItems.forEach(item => {
  textContent += `---
ID: ${item.id}
File: ${item.filename}
Text:
${item.text}

`;
});

textContent += `
========================================
CHUNKS (Language patterns)
Total: ${chunkItems.length} items
========================================

`;

chunkItems.forEach(item => {
  textContent += `---
ID: ${item.id}
File: ${item.filename}
Text:
${item.text}

`;
});

textContent += `
========================================
SHADOWING (Pronunciation practice)
Total: ${shadowingItems.length} items
========================================

`;

shadowingItems.forEach(item => {
  textContent += `---
ID: ${item.id}
File: ${item.filename}
Text:
${item.text}

`;
});

fs.writeFileSync(
  path.join(exportDir, 'all-content.txt'),
  textContent
);

// Write texts only file (for batch processing)
const textsOnly = allItems.map(item => item.text).join('\n---\n');
fs.writeFileSync(
  path.join(exportDir, 'texts-only.txt'),
  textsOnly
);

// Write CSV
let csv = 'id,filename,category,text\n';
allItems.forEach(item => {
  const escapedText = `"${item.text.replace(/"/g, '""')}"`;
  csv += `${item.id},${item.filename},${item.category},${escapedText}\n`;
});
fs.writeFileSync(
  path.join(exportDir, 'all-content.csv'),
  csv
);

console.log(`\nExport complete!`);
console.log(`Total items: ${allItems.length}`);
console.log(`Total characters: ${totalChars.toLocaleString()}`);
console.log(`Estimated ElevenLabs cost: ~$${(totalChars * 0.00003).toFixed(2)}`);
console.log(`\nFiles created in elevenlabs-export/:`);
console.log(`  - all-content.json`);
console.log(`  - all-content.txt`);
console.log(`  - all-content.csv`);
console.log(`  - texts-only.txt`);

// Show some sample texts
console.log(`\n--- Sample Texts ---`);
console.log(`\nScenario sample: "${scenarioItems[0]?.text}"`);
console.log(`\nChunk sample: "${chunkItems[0]?.text}"`);
console.log(`\nShadowing sample: "${shadowingItems[0]?.text}"`);
