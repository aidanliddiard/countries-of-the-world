import { client, checkError } from './client.js';

export async function fetchCountry() {
  const resp = await client.from('countries').select('*');
  return checkError(resp);
}
