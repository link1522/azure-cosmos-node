import 'jsr:@std/dotenv/load';
import { upsert } from './helpers/DBHelper.ts';

const item = {
  id: '123456',
  categoryId: 'fruit',
  name: 'apple'
};
upsert('Test', item);

console.log('Done!');
