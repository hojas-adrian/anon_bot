import { NextFunction } from "../deps.ts";
import { ADMINS_IDS, GROUP_ID } from "../helpers/constants.ts";
import MyContext from "../helpers/context.ts";

export default async (ctx: MyContext, next: NextFunction) => {
  if (!ctx.from) {
    return;
  }

  const user = await ctx.api.getChatMember(GROUP_ID, ctx.from?.id);

  if (
    user.status === "member" ||
    user.status === "creator" ||
    user.status === "administrator" ||
    ADMINS_IDS.some((id) => {
      return ctx.from?.id === +id;
    })
  ) {
    return await next();
  }

  await ctx.react("👀");
  await ctx.reply("Que haces?");
};
