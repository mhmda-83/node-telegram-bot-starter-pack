import { Bot, session } from 'grammy';

import { RedisAdapter } from '@grammyjs/storage-redis';
import { getConfigs } from '../configs';
import redis from '../redis';
import { BotContext } from './types/botContext';

const configs = getConfigs();

const bot = new Bot<BotContext>(configs.botToken, {
  client: {
    apiRoot: configs.telegramApiBaseUrl,
  },
});

const redisSessionStorage = new RedisAdapter({
  instance: redis,
});
bot.use(
  session({
    initial: () => ({}),
    storage: redisSessionStorage,
  }),
);

export default bot;
