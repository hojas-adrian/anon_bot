import { MyMenuContext } from "../helpers/context.ts";
import { GROUP_ID } from "../helpers/constants.ts";

export default async (ctx: MyMenuContext) => {
  if (!ctx.callbackQuery) {
    return;
  }
  console.log(ctx.callbackQuery.message);

  const match = ctx.callbackQuery.message?.reply_to_message?.text
    ?.replace("\n", " ")
    .split(" ");

  const link = match?.[0].split("/").slice(-1)[0];

  const text = match?.slice(1).join();

  const msg = await ctx.api.sendMessage(GROUP_ID, `${text}`, {
    protect_content: true,
    reply_parameters: {
      message_id: +(link || 0),
    },
  });

  ctx.session.id = msg.message_id;
  ctx.session.messages = --ctx.session.messages;
  await ctx.answerCallbackQuery("🎉 mensaje enviado");
  await ctx.editMessageText("😶‍🌫️ mensaje enviado");

  return ctx.menu.close();
};
