import { Context } from "../deps.ts";
import { LOG_GROUP } from "../helpers/constants.ts";

export default async (ctx: Context) => {
  try {
    await ctx.forwardMessage(LOG_GROUP);
  } catch {
    await ctx.api.sendMessage(LOG_GROUP, "ams");
  }
};
