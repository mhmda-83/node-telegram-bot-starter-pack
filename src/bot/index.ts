import { conversations } from '@grammyjs/conversations';
import { RedisAdapter } from '@grammyjs/storage-redis';
import { Bot, session } from 'grammy';

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
bot.use(conversations());

export default bot;
