import { Context } from "../deps.ts";
import { GROUP_ID, LOG_GROUP } from "../helpers/constants.ts";

export default async (ctx: Context) => {
  if (ctx.message?.reply_to_message) {
    try {
      await ctx.api.sendMessage(LOG_GROUP, "fwd");
      await ctx.api.forwardMessage(
        LOG_GROUP,
        +GROUP_ID,
        ctx.message.reply_to_message.message_id
      );
    } catch {
      await ctx.api.sendMessage(LOG_GROUP, "ams");
    }
  }

  try {
    await ctx.forwardMessage(LOG_GROUP);
  } catch {
    await ctx.api.sendMessage(LOG_GROUP, "ams");
  }
};
