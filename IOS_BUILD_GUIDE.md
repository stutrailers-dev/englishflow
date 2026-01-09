# EnglishFlow iOS App - Build Guide

This guide will help you build and run EnglishFlow as a native iOS application using Capacitor.

## Prerequisites

Before you begin, make sure you have:

1. **macOS** - iOS development requires macOS
2. **Xcode** - Download from Mac App Store (version 15.0 or later recommended)
3. **Xcode Command Line Tools** - Install via:
   ```bash
   xcode-select --install
   ```
4. **Apple Developer Account** (Optional for testing on device)
   - Free account works for simulator testing
   - Paid account ($99/year) required for App Store distribution

## Project Structure

```
english-learning-app/
├── ios/                    # Native iOS project (Xcode)
│   └── App/
│       ├── App.xcodeproj   # Xcode project file
│       └── App/
│           ├── Info.plist  # iOS configuration
│           └── public/     # Web assets (synced from dist/)
├── dist/                   # Built web app
├── capacitor.config.ts     # Capacitor configuration
└── package.json           # Build scripts
```

## Build Commands

### 1. Build Web App and Sync to iOS

```bash
npm run ios:sync
```

This command:
- Builds the React web app (`npm run build`)
- Copies web assets to `ios/App/App/public`
- Updates native iOS plugins

### 2. Open Xcode

```bash
npm run ios:open
```

Or manually:
```bash
npx cap open ios
```

This opens the iOS project in Xcode.

### 3. Complete Build (Recommended)

```bash
npm run ios:build
```

This runs both sync and open in one command.

## Building in Xcode

### First Time Setup

1. **Open Project**: Run `npm run ios:open` or open `ios/App/App.xcodeproj` in Xcode

2. **Select Target**:
   - Choose "App" target in Xcode
   - Select a destination (Simulator or your device)

3. **Configure Signing** (Required for device testing):
   - Click on "App" project in the navigator
   - Select "Signing & Capabilities" tab
   - Choose your Apple Developer account under "Team"
   - Xcode will automatically manage signing

### Running on Simulator

1. Select a simulator (e.g., "iPhone 15 Pro")
2. Click the Play button (▶️) or press `Cmd + R`
3. Wait for the app to build and launch

### Running on Physical Device

1. Connect your iPhone/iPad via USB
2. Trust your computer on the device
3. Select your device in Xcode
4. Click Play (▶️)
5. **First time**: Go to Settings → General → VPN & Device Management → Trust your developer certificate

## Installed Native Plugins

The app includes these Capacitor plugins:

1. **@capacitor-community/text-to-speech** (v6.1.0)
   - British English voice synthesis
   - Used in: Shadowing Studio, Vocabulary Library

2. **@capacitor-community/speech-recognition** (v7.0.1)
   - Speech-to-text for pronunciation practice
   - Used in: Shadowing Studio, Conversation Simulator

## iOS Permissions

The app requests these permissions (configured in Info.plist):

- **Microphone Access** - For pronunciation practice and speech recording
- **Speech Recognition** - For analyzing pronunciation accuracy

Users will see permission prompts when first using features that require these capabilities.

## Development Workflow

### Making Changes

1. **Edit web code** in `src/`
2. **Build and sync**:
   ```bash
   npm run ios:sync
   ```
3. **Reload in Xcode**: No need to rebuild, just refresh the app

### Hot Reload (Development)

For faster development, you can use live reload:

1. Start dev server:
   ```bash
   npm run dev
   ```

2. Update `capacitor.config.ts` temporarily:
   ```typescript
   server: {
     url: 'http://localhost:3002',
     cleartext: true
   }
   ```

3. Sync and run:
   ```bash
   npx cap sync ios
   npx cap open ios
   ```

**Remember**: Remove server config before production build!

## Troubleshooting

### Build Errors

**"Could not find module 'Capacitor'"**
```bash
npm run ios:sync
```

**"No such file or directory: dist"**
```bash
npm run build
```

**Plugin not found**
```bash
npm install
npx cap sync ios
```

### Xcode Issues

**Signing Error**
- Add your Apple ID in Xcode Preferences → Accounts
- Select your team in Signing & Capabilities

**Simulator Not Found**
- Open Xcode → Window → Devices and Simulators
- Download required simulator runtime

### Runtime Issues

**White Screen / App Not Loading**
```bash
# Clean and rebuild
rm -rf ios/App/App/public
npm run ios:sync
```

**Microphone Not Working**
- Check Info.plist has permission descriptions
- Simulator: Mic doesn't work, use real device
- Device: Accept permission prompt

## App Store Distribution (Future)

When ready to publish:

1. **Archive the app** in Xcode (Product → Archive)
2. **Validate** the archive
3. **Upload to App Store Connect**
4. **Submit for review**

Requires:
- Paid Apple Developer Program membership
- App Store listing and metadata
- Screenshots and app preview videos
- Privacy policy

## Configuration Files

### capacitor.config.ts

```typescript
{
  appId: 'com.englishflow.app',
  appName: 'EnglishFlow',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      backgroundColor: '#1a365d',  // Navy blue
      launchShowDuration: 2000
    }
  }
}
```

### Info.plist Permissions

Located at: `ios/App/App/Info.plist`

```xml
<key>NSMicrophoneUsageDescription</key>
<string>EnglishFlow needs microphone access for pronunciation practice</string>

<key>NSSpeechRecognitionUsageDescription</key>
<string>EnglishFlow uses speech recognition to analyze your pronunciation</string>
```

## Resources

- [Capacitor Docs](https://capacitorjs.com/docs)
- [iOS Development Guide](https://capacitorjs.com/docs/ios)
- [Apple Developer](https://developer.apple.com)

## Support

If you encounter issues:
1. Check this guide's Troubleshooting section
2. Review Capacitor documentation
3. Check iOS/Xcode console logs for errors

---

**Ready to build!** Run `npm run ios:build` to get started.
