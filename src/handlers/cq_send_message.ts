import { MyMenuContext } from "../helpers/context.ts";
import { GROUP_ID } from "../helpers/constants.ts";

export default async (ctx: MyMenuContext) => {
  if (!ctx.callbackQuery) {
    return;
  }

  const text = ctx.callbackQuery.message?.reply_to_message?.text;
  const msg = await ctx.api.sendMessage(GROUP_ID, `${text}`);

  ctx.session.id = msg.message_id;
  ctx.session.messages = --ctx.session.messages;

  await ctx.answerCallbackQuery("🎉 mensaje enviado");
  await ctx.editMessageText("😶‍🌫️ mensaje enviado");

  return ctx.menu.close();
};
