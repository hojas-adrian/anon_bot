import { GROUP_ID } from "../helpers/constants.ts";
import MyContext from "../helpers/context.ts";
import link from "../menus/link.ts";

export default async (ctx: MyContext) => {
  if (!ctx.message || ctx.message.text?.startsWith("/")) {
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

  if (
    ctx.message.text?.startsWith(
      `https://t.me/c/${GROUP_ID.replace("-100", "")}/`
    ) &&
    ctx.message.text.replace("\n", " ").split(" ").length > 1
  ) {
    return ctx.reply("Que deseas hacer?", {
      reply_markup: link,
      reply_parameters: {
        message_id: ctx.message.message_id,
      },
    });
  }

  if (ctx.message.forward_origin) {
    return await ctx.forwardMessage(GROUP_ID);
  }

  const msg = await ctx.copyMessage(GROUP_ID);
  await ctx.react("😈");

  ctx.session.id = msg.message_id;
  ctx.session.messages = --ctx.session.messages;
};
