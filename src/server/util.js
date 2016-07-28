import debug from 'debug';
export const logerror = debug('todo:error');
export const loginfo = debug('todo:info');
export class NotFoundError extends Error {};
