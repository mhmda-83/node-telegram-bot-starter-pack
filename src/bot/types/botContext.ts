import { ConversationFlavor } from '@grammyjs/conversations';
import { Context, SessionFlavor } from 'grammy';

import { SessionData } from './sessionData';

export type BotContext = Context &
  SessionFlavor<SessionData> &
  ConversationFlavor;
