import { Composer, limit } from "../deps.ts";
import MyContext from "../helpers/context.ts";
import session from "../helpers/session.ts";

const composer = new Composer<MyContext>();

composer.use(limit());
composer.use(session);

export default composer;
