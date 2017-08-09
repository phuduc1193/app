import * as process from 'process';

export default class Config {
  apiGateway: string;

  constructor () {
    this.apiGateway = process.env.API_URL || '127.0.0.1:3000/api';
  }
}
