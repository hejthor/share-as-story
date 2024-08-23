import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { Slot, useRouter } from "expo-router";
import { useColorScheme } from '@/hooks/useColorScheme';

import { ShareIntentProvider } from "expo-share-intent";

export default function RootLayout() {
  const router = useRouter();
  const colorScheme = useColorScheme();

  return (
    <ShareIntentProvider
      options={{
        debug: true,
        resetOnBackground: true,
        onResetShareIntent: () =>
          // used when app going in background and when the reset button is pressed
          router.replace({
            pathname: "/",
          }),
      }}
    >
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Slot />
      </ThemeProvider>
    </ShareIntentProvider>
  );
}
