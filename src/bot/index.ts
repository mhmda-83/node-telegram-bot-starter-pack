import { Bot } from 'grammy';

import { getConfigs } from '../configs';

const configs = getConfigs();

const bot = new Bot(configs.botToken, {
  client: {
    apiRoot: configs.telegramApiBaseUrl,
  },
});

export default bot;
