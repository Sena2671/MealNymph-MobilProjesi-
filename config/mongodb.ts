import Realm from 'realm';
import { User } from '../models/User';

let realmInstance: Realm | null = null;

export const connectDB = async (): Promise<Realm> => {
  try {
    if (!realmInstance) {
      realmInstance = await Realm.open({
        schema: [User.schema],
        schemaVersion: 1,
      });
      console.log('Realm bağlantısı başarılı');
    }
    return realmInstance;
  } catch (error) {
    console.error('Realm bağlantı hatası:', error);
    throw error;
  }
};

export const getRealm = (): Realm => {
  if (!realmInstance) {
    throw new Error('Realm bağlantısı henüz kurulmadı');
  }
  return realmInstance;
};

export const closeDB = async (): Promise<void> => {
  try {
    if (realmInstance) {
      realmInstance.close();
      realmInstance = null;
      console.log('Realm bağlantısı kapatıldı');
    }
  } catch (error) {
    console.error('Realm kapatma hatası:', error);
    throw error;
  }
};

// Uygulama kapatıldığında bağlantıyı kapat
if (typeof process !== 'undefined') {
  process.on('SIGINT', async () => {
    await closeDB();
    process.exit(0);
  });
} 