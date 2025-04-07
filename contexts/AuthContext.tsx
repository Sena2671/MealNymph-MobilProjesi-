import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { connectDB } from '../config/mongodb';
import { User } from '../models/User';
import { BSON } from 'realm';

type UserData = {
  id: string;
  email: string;
  name: string;
};

type AuthContextType = {
  user: UserData | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const userJson = await AsyncStorage.getItem('user');
      if (userJson) {
        setUser(JSON.parse(userJson));
      }
    } catch (error) {
      console.error('Kullanıcı yükleme hatası:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const realm = await connectDB();
      const user = realm.objects<User>('User').filtered('email == $0', email)[0];

      if (!user || user.password !== password) {
        throw new Error('Geçersiz e-posta veya şifre');
      }

      const userData: UserData = {
        id: user._id.toString(),
        email: user.email,
        name: user.name
      };

      await AsyncStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Giriş hatası:', error);
      throw error;
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      const realm = await connectDB();
      
      const existingUser = realm.objects<User>('User').filtered('email == $0', email)[0];
      if (existingUser) {
        throw new Error('Bu e-posta adresi zaten kullanılıyor');
      }

      realm.write(() => {
        const user = realm.create('User', {
          _id: new BSON.ObjectId(),
          email,
          password,
          name,
          createdAt: new Date()
        });

        const userData: UserData = {
          id: user._id.toString(),
          email: user.email,
          name: user.name
        };

        AsyncStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
      });

      router.replace('/(tabs)');
    } catch (error) {
      console.error('Kayıt hatası:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setUser(null);
      router.replace('/(auth)/login');
    } catch (error) {
      console.error('Çıkış hatası:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 