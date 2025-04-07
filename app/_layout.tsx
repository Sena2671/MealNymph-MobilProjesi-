import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';

export default function Layout() {
  return (
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
  );
}
