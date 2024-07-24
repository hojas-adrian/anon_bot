import { NextFunction } from "../deps.ts";
import MyContext from "../helpers/context.ts";
import { GROUP_ID } from "../helpers/constants.ts";

export default async (ctx: MyContext, next: NextFunction) => {
  console.log("adsf");

  if (ctx.chat?.id === +GROUP_ID) {
    await next();
  }
};
