# node-telegram-bot-starter-pack

## How to use

1. clone the repo
2. run `npm install`
3. run `cp .env.example .env` and replace the variables with your data
4. define your database schema in prisma/schema.prisma
5. run `npm run prisma generate` to generate prisma client
6. run `npm run prisma db push` to sync database with schema
7. add your bot controllers in src/bot/controllers/ directory and register them inside src/bot/index.ts file
8. add your web controllers in src/web/controllers/ directory and register them in src/web/index.ts
9. run `npm run start:dev` to run the project and watch for changes to restart the server

## Questions may you have 🤔

1. why grammy? it's just like telegraf but with awesome documentation and support.
2. why prisma? awesome documentation, very easy to use, multi dialect, and great typing so why not?

## Deployment

1. make sure you set the APPLICATION_BASE_URL environment variable to your domain which webhook will be set on that
2. set NODE_ENV to production
3. start the project

## Contribution

1. fork the repo
2. create a branch with the kebab-case name which describes what you working on
3. apply your changes
4. commit with conventional commits rules
5. submit a PR
