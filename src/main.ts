import axios from 'axios';
import dotenv from 'dotenv';
import { IpFilter as ipFilter } from 'express-ipfilter';
import { webhookCallback } from 'grammy';
import path from 'path';

import { getConfigs } from './configs';

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const configs = getConfigs();

import bot from './bot';
import { connect } from './prisma';
import app from './web';

async function main() {
  await connect();
  console.log('database connected.');

  if (configs.isDevelopment) {
    bot.start();
  } else {
    const { data } = await axios.get(
      'https://core.telegram.org/resources/cidr.txt',
    );

    const telegramValidIps: string[] = data
      .split('\n')
      .map((ip: string) => ip.trim())
      .filter((ip: string) => ip);

    app.use(
      '/bot',
      ipFilter(telegramValidIps, { mode: 'allow' }),
      webhookCallback(bot, 'express'),
    );
    await bot.api.setWebhook(`${configs.applicationBaseUrL}/bot`);
    console.log(`webhook set to ${configs.applicationBaseUrL}/bot`);
  }

  app.listen(Number(configs.port), () => {
    console.log(`server is up and running on port ${configs.port}`);
  });
}

main();
