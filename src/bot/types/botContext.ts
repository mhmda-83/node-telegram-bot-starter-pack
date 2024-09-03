import { Context, SessionFlavor } from 'grammy';

import { SessionData } from './sessionData';

export type BotContext = Context & SessionFlavor<SessionData>;
