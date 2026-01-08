import { Client, Databases, Account } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://nyc.cloud.appwrite.io/v1')
  .setProject('695ee358003b8b7cebd8');

export const account = new Account(client);
export const databases = new Databases(client);

export { client };