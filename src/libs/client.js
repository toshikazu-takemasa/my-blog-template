// libs/client.ts
require('dotenv').config();
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'zx5efkkc2e',
  apiKey: 'd4d164926c3046d182ffb6d05b8de6f233e9',
});
