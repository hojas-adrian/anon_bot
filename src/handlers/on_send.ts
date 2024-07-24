import { GROUP_ID } from "../helpers/constants.ts";
import MyContext from "../helpers/context.ts";

export default async (ctx: MyContext) => {
  if (!ctx.message) {
    return;
  }

  if (ctx.session.messages <= 0) {
    return ctx.reply("Tu cuota de 10 mensajes se ha agotado, espera una hora", {
      protect_content: true,
      reply_parameters: {
        message_id: ctx.message.message_id,
      },
    });
  }

  if (ctx.message.forward_origin) {
    await ctx.forwardMessage(GROUP_ID);
  }

  const msg = await ctx.copyMessage(GROUP_ID);
  await ctx.react("😈");

  ctx.session.id = msg.message_id;
  ctx.session.messages = --ctx.session.messages;
};
