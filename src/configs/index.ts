import getEnv from './getEnv';

const getConfigs = () => ({
  nodeEnv: getEnv('NODE_ENV', 'development'),
  port: getEnv('port', '3000'),
  applicationBaseUrL: getEnv('APPLICATION_BASE_URL', 'https://localhost'),
  botToken: getEnv('BOT_TOKEN'),
  telegramApiBaseUrl: getEnv('TELEGRAM_API_BASE_URL'),
});

export { getConfigs };
