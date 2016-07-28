import 'source-map-support/register';
//import params from '../../params';
import * as server from './index';
import { loginfo } from './util';
import config from '../config';

const envConfig = config[process.env.NODE_ENV];

server.create(envConfig)
  .then(() => loginfo('ready todo with U ...'))
  .catch(err => { throw err });

