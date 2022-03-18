import dotenv from 'dotenv';
import { IpFilter as ipfilter } from 'express-ipfilter';
import { webhookCallback } from 'grammy';
import path from 'path';

import bot from './bot';
import { getConfigs } from './configs';
import { connect } from './prisma';
import app from './web';

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const configs = getConfigs();

(async () => {
  await connect();
  console.log('database connected.');

  if (configs.nodeEnv === 'development') {
    bot.start();
  } else if (configs.nodeEnv === 'production') {
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
