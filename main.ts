import 'jsr:@std/dotenv/load';
import type { Product } from './interface/Product.ts';
import { upsert, find, query } from './helpers/DBHelper.ts';

const item: Product = {
  id: '123456',
  categoryId: 'fruit',
  name: 'apple',
  price: 200
};

// upsert('Test', item);

// const result = await find<Product>('Test', '123456', 'fruit');
// console.log(result);

const queryStr = 'SELECT * FROM products p WHERE p.categoryId = @categoryId';
const parameters = [{ name: '@categoryId', value: 'fruit' }];
const result = await query<Product>('Test', queryStr, parameters);
console.log(result);

console.log('Done!');
