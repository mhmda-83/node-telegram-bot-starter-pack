import IORedis from 'ioredis';
import { getConfigs } from './configs';

const redis = new IORedis(getConfigs().redisUri);

export default redis;
