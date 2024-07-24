import { Composer } from "../deps.ts";
import onSend from "../handlers/on_send.ts";
import MyContext from "../helpers/context.ts";
import isInGroup from "../middlewares/is_in_group.ts";

const composer = new Composer<MyContext>();

const inPrivate = composer.use(isInGroup);

inPrivate.on("message", onSend);

export default composer;
