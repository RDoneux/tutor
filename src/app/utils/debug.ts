import dbg from 'debug';

export const debug = (namespace: string) => dbg(`tutorlog:${namespace}`);
