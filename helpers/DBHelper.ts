import { ItemDefinition } from 'npm:@azure/cosmos';
import { database } from '../dbConn.ts';

export async function upsert<T>(containerName: string, item: T) {
  const container = database.container(containerName);
  await container.items.upsert(item);
}

export async function find<T extends ItemDefinition>(
  containerName: string,
  id: string,
  partitionKey: string
) {
  const container = database.container(containerName);
  const response = await container.item(id, partitionKey).read<T>();
  const item = response.resource;
  return item;
}
