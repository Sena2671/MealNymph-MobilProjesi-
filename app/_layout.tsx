import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { FavoritesProvider } from '../contexts/FavoritesContext';

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <AuthProvider>
        <Stack>
          <Stack.Screen 
            name="(auth)" 
            options={{ 
              headerShown: false 
            }} 
          />
          <Stack.Screen 
            name="(tabs)" 
            options={{ 
              headerShown: false 
            }} 
          />
        </Stack>
      </AuthProvider>
    </FavoritesProvider>
  );
}
