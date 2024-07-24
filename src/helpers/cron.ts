import MyContext from "./context.ts";

export const startCron = (ctx: MyContext) => {
  Deno.cron("Log a message", "0 * * * *", () => {
    ctx.session.messages = 10;
  });
};
