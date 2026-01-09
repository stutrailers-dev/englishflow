/**
 * Export all speech content for ElevenLabs audio generation
 * Run with: npx ts-node scripts/export-for-elevenlabs.ts
 */

import * as fs from 'fs'
import * as path from 'path'

// Import data files
import { scenarios } from '../src/data/scenarios'
import { chunks } from '../src/data/chunks'
import { shadowingContent } from '../src/data/shadowingContent'

interface AudioExportItem {
  id: string
  filename: string
  text: string
  category: string
  context?: string
}

const exportDir = path.join(__dirname, '..', 'elevenlabs-export')

// Ensure export directory exists
if (!fs.existsSync(exportDir)) {
  fs.mkdirSync(exportDir, { recursive: true })
}

// Export scenario agent dialogues
function exportScenarios(): AudioExportItem[] {
  const items: AudioExportItem[] = []

  scenarios.forEach(scenario => {
    scenario.dialogue
      .filter(turn => turn.role === 'agent')
      .forEach(turn => {
        items.push({
          id: `${scenario.id}_${turn.id}`,
          filename: `scenarios/${scenario.id}/${turn.id}.mp3`,
          text: turn.text,
          category: 'scenario',
          context: `${scenario.title} - ${scenario.category}`
        })
      })
  })

  return items
}

// Export chunks
function exportChunks(): AudioExportItem[] {
  return chunks.map(chunk => ({
    id: chunk.id,
    filename: `chunks/${chunk.id}.mp3`,
    text: chunk.chunk,
    category: 'chunk',
    context: chunk.category
  }))
}

// Export shadowing content
function exportShadowing(): AudioExportItem[] {
  return shadowingContent.map(item => ({
    id: item.id,
    filename: `shadowing/${item.id}.mp3`,
    text: item.text,
    category: 'shadowing',
    context: item.context
  }))
}

// Main export function
function main() {
  console.log('Exporting content for ElevenLabs...\n')

  const scenarioItems = exportScenarios()
  const chunkItems = exportChunks()
  const shadowingItems = exportShadowing()

  const allItems = [...scenarioItems, ...chunkItems, ...shadowingItems]

  // Calculate total characters
  const totalChars = allItems.reduce((sum, item) => sum + item.text.length, 0)

  // Export as JSON (for programmatic use)
  fs.writeFileSync(
    path.join(exportDir, 'all-content.json'),
    JSON.stringify(allItems, null, 2)
  )

  // Export as simple text file (for manual copy-paste into ElevenLabs)
  let textContent = `# ElevenLabs Audio Generation List
# Total items: ${allItems.length}
# Total characters: ${totalChars.toLocaleString()}
# Estimated cost: ~$${(totalChars * 0.00003).toFixed(2)} (at $0.30 per 1000 chars)

========================================
SCENARIOS (Agent dialogues)
Total: ${scenarioItems.length} items
========================================

`

  scenarioItems.forEach(item => {
    textContent += `---
ID: ${item.id}
File: ${item.filename}
Context: ${item.context}
Text:
${item.text}

`
  })

  textContent += `
========================================
CHUNKS (Language patterns)
Total: ${chunkItems.length} items
========================================

`

  chunkItems.forEach(item => {
    textContent += `---
ID: ${item.id}
File: ${item.filename}
Text:
${item.text}

`
  })

  textContent += `
========================================
SHADOWING (Pronunciation practice)
Total: ${shadowingItems.length} items
========================================

`

  shadowingItems.forEach(item => {
    textContent += `---
ID: ${item.id}
File: ${item.filename}
Context: ${item.context}
Text:
${item.text}

`
  })

  fs.writeFileSync(
    path.join(exportDir, 'all-content.txt'),
    textContent
  )

  // Export just the texts (one per line, for batch processing)
  const textsOnly = allItems.map(item => item.text).join('\n---\n')
  fs.writeFileSync(
    path.join(exportDir, 'texts-only.txt'),
    textsOnly
  )

  // Export a CSV for spreadsheet use
  let csv = 'id,filename,category,context,text\n'
  allItems.forEach(item => {
    const escapedText = `"${item.text.replace(/"/g, '""')}"`
    csv += `${item.id},${item.filename},${item.category},"${item.context || ''}",${escapedText}\n`
  })
  fs.writeFileSync(
    path.join(exportDir, 'all-content.csv'),
    csv
  )

  // Summary
  console.log('Export complete!\n')
  console.log('Summary:')
  console.log(`  - Scenarios: ${scenarioItems.length} audio files`)
  console.log(`  - Chunks: ${chunkItems.length} audio files`)
  console.log(`  - Shadowing: ${shadowingItems.length} audio files`)
  console.log(`  - Total: ${allItems.length} audio files`)
  console.log(`  - Total characters: ${totalChars.toLocaleString()}`)
  console.log(`  - Estimated ElevenLabs cost: ~$${(totalChars * 0.00003).toFixed(2)}`)
  console.log('\nFiles created in elevenlabs-export/:')
  console.log('  - all-content.json (for programmatic use)')
  console.log('  - all-content.txt (human readable)')
  console.log('  - all-content.csv (for spreadsheets)')
  console.log('  - texts-only.txt (just the texts)')
}

main()
