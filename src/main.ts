/* eslint-disable import/first */
import dotenv from 'dotenv';
import { IpFilter as ipfilter } from 'express-ipfilter';
import { webhookCallback } from 'grammy';
import path from 'path';

import { getConfigs } from './configs';

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const configs = getConfigs();

import bot from './bot';
import { connect } from './prisma';
import app from './web';

(async () => {
  await connect();
  console.log('database connected.');

  if (configs.isDevelopment) {
    bot.start();
  } else if (configs.isDevelopment) {
    app.use(
      '/bot',
      ipfilter(['149.154.160.0/20', '91.108.4.0/22'], { mode: 'allow' }),
      webhookCallback(bot, 'express'),
    );
    await bot.api.setWebhook(`${configs.applicationBaseUrL}/bot`);
    console.log(`webhook set to ${configs.applicationBaseUrL}/bot`);
  }

  app.listen(Number(configs.port), () => {
    console.log(`server is up and running on port ${configs.port}`);
  });
})();
