import { Composer } from "../deps.ts";
import MyContext from "../helpers/context.ts";
import isInGroup from "../middlewares/is_in_group.ts";
import onInit from "../handlers/ch_init.ts";

const composer = new Composer<MyContext>();

composer.command("start", isInGroup, onInit);

export default composer;
