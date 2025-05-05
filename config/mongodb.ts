import Realm from 'realm';
import { User } from '../models/User';

let realm: Realm | null = null;

export const connectDB = async () => {
  try {
    if (!realm) {
      realm = await Realm.open({
        schema: [User],
        schemaVersion: 1,
      });
      console.log('Realm bağlantısı başarılı');
    }
  } catch (error) {
    console.error('Realm bağlantı hatası:', error);
    throw error;
  }
};

export const getRealm = () => {
  if (!realm) {
    throw new Error('Realm bağlantısı henüz kurulmadı');
  }
  return realm;
};

export const closeDB = async () => {
  try {
    if (realm) {
      realm.close();
      realm = null;
      console.log('Realm bağlantısı kapatıldı');
    }
  } catch (error) {
    console.error('Realm kapatma hatası:', error);
    throw error;
  }
};

// Uygulama kapatıldığında bağlantıyı kapat
process.on('SIGINT', async () => {
  await closeDB();
  process.exit(0);
}); 