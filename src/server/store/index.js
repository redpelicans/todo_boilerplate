import Redis from 'ioredis';
import { logerror, loginfo } from '../util';
import Todo from './todos';

let redis;

const initRedis = ({ host, port, db = 0 }) => {
  if (redis) {
    return redis;
  }
  redis = new Redis({ port, host, db });
  redis.on('ready', () => {
    loginfo('[Redis] is ready.');
  });

  redis.on('error', (err) => {
    logerror(`[Redis] ${err}`);
  });

  redis.on('reconnecting', () => {
    logerror('[Redis] is reconnecting');
  });

  redis.on('end', () => {
    logerror('[Redis] connection ended');
  });

  return redis;
}

export const initStore = (config) => {
  const redis = initRedis(config);
  const todos = new Todo(redis);
  return { redis, todos };
};
