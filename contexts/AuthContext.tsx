import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

type UserData = {
  id: string;
  email: string;
  name: string;
  height: number;
  weight: number;
  age: number;
  gender: 'male' | 'female';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'veryActive';
  healthStatus: 'normal' | 'overweight' | 'underweight';
};

type AuthContextType = {
  user: UserData | null;
  isLoading: boolean;
  login: (userData: UserData) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkUserSession();
  }, []);

  const checkUserSession = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Oturum kontrolü hatası:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      // Burada gerçek bir API çağrısı yapılabilir
      const newUser: UserData = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name,
        height: 0,
        weight: 0,
        age: 0,
        gender: 'male',
        activityLevel: 'moderate',
        healthStatus: 'normal'
      };

      await AsyncStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Kayıt hatası:', error);
      throw error;
    }
  };

  const login = async (userData: UserData) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Giriş hatası:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setUser(null);
      router.replace('/login');
    } catch (error) {
      console.error('Çıkış hatası:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 