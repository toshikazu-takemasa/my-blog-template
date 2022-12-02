// libs/client.ts
require('dotenv').config();
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || 'zx5efkkc2e',
  apiKey: process.env.API_KEY || 'd4d164926c3046d182ffb6d05b8de6f233e9',
});
