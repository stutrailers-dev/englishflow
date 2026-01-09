import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.englishflow.app',
  appName: 'EnglishFlow',
  webDir: 'dist',
  server: {
    // Allow all origins for development
    androidScheme: 'https',
    iosScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#1a365d',
      showSpinner: false
    },
    Keyboard: {
      resize: 'body',
      style: 'dark'
    }
  }
};

export default config;
