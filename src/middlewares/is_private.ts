import { NextFunction } from "../deps.ts";
import MyContext from "../helpers/context.ts";

export default async (ctx: MyContext, next: NextFunction) => {
  if (ctx.chat?.type === "private") {
    await next();
  }
};
