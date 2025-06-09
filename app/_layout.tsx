import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { NotesProvider } from '@/contexts/NotesContext';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import '../src/i18n';
import '../global.css';
import { useEffect } from 'react';

export default function RootLayout() {
  useFrameworkReady();
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NotesProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </NotesProvider>
  );
}
