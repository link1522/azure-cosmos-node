import { database } from '../dbConn.ts';

export async function upsert<T>(containerName: string, item: T) {
  const container = database.container(containerName);
  await container.items.upsert(item);
}
