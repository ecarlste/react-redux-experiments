import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  adapter: cacheAdapterEnhancer(axios.defaults.adapter)
});
