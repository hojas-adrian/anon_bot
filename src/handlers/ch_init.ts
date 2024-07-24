import { startCron } from "../helpers/cron.ts";
import MyContext from "../helpers/context.ts";

export default (ctx: MyContext) => {
  startCron(ctx);
};
