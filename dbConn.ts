import { CosmosClient } from 'npm:@azure/cosmos';

const connectionString = Deno.env.get('AZURE_COSMOS_CONNECTION_STRING');
if (!connectionString) {
  throw new Error('AZURE_COSMOS_CONNECTION_STRING is not set');
}
const databaseName = Deno.env.get('AZURE_COSMOS_DATABASE');
if (!databaseName) {
  throw new Error('AZURE_COSMOS_DATABASE is not set');
}

const client = new CosmosClient(connectionString);
export const database = client.database(databaseName);
