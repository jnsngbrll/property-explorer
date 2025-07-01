import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Appearance } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import '@/styles/global.css';

import { useTheme } from '@/hooks/use-theme';

export default function RootLayout() {
  const { theme } = useTheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const isDarkMode = theme === 'dark';

  useEffect(() => {
    Appearance.setColorScheme(theme);
  }, [theme]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView className="flex-1">
      <ThemeProvider value={isDarkMode ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
