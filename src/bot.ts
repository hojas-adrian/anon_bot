import { Bot } from "./deps.ts";
import MyContext from "./helpers/context.ts";
import { BOT_TOKEN } from "./helpers/constants.ts";
import isPrivate from "./middlewares/is_private.ts";
import plugins from "./composer/plugins.ts";
import commands from "./composer/commands.ts";
import inPrivate from "./composer/in_private.ts";
import onError from "./handlers/error.ts";
import menus from "./composer/menus.ts";

export const bot = new Bot<MyContext>(BOT_TOKEN);

bot.use(plugins);
bot.use(menus);
bot.use(commands);
bot.use(isPrivate, inPrivate);
bot.catch(onError);
