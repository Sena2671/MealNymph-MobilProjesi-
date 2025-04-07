import { BSON } from 'realm';

// Kullanıcı şeması
export class User {
  _id!: BSON.ObjectId;
  email!: string;
  password!: string;
  name!: string;
  height!: number;
  weight!: number;
  age!: number;
  gender!: string;
  activityLevel!: string;
  healthStatus!: string;
  createdAt!: Date;

  static schema = {
    name: 'User',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      email: 'string',
      password: 'string',
      name: 'string',
      height: 'double',
      weight: 'double',
      age: 'int',
      gender: 'string',
      activityLevel: 'string',
      healthStatus: 'string',
      createdAt: 'date'
    }
  };
}

// Realm yapılandırması
export const realmConfig: Realm.Configuration = {
  schema: [User],
  schemaVersion: 1,
}; 