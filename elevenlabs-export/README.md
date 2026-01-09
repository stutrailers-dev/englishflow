# ElevenLabs Audio Generation Guide

## How to Use These Files

1. Go to https://elevenlabs.io
2. Create an account and choose a voice (recommend: British female, warm tone)
3. Use the text files in this folder to generate MP3 files
4. Save MP3s with the exact filenames specified

## Recommended ElevenLabs Settings

- **Voice**: Rachel, Charlotte, or Bella (British options)
- **Stability**: 0.5-0.6 (more natural variation)
- **Clarity + Similarity Enhancement**: 0.75
- **Style**: 0.3-0.4 (slight expressiveness)

## File Structure After Generation

```
public/
  audio/
    scenarios/
      airport_checkin_001/
        turn_1.mp3
        turn_3.mp3
        turn_5.mp3
        ...
    chunks/
      chunk_001.mp3
      chunk_002.mp3
      ...
    vocabulary/
      word_001.mp3
      ...
```

## Cost Estimate

- ~50 scenarios x ~4 agent turns x ~50 chars = ~10,000 characters
- ~100 chunks x ~50 chars = ~5,000 characters
- ~100 vocabulary x ~30 chars = ~3,000 characters
- **Total**: ~18,000 characters

ElevenLabs Free tier: 10,000 chars/month
Starter plan ($5/month): 30,000 chars/month
