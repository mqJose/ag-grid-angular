import { environmentConfig } from './environment.config';

export const environment = {
  production: true,
  ...environmentConfig,
  host: 'https://hardxode.com/api'
};
