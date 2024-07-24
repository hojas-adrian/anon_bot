import { Composer } from "../deps.ts";
import MyContext from "../helpers/context.ts";
import link from "../menus/link.ts";

const composer = new Composer<MyContext>();

composer.use(link);

export default composer;
