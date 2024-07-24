import { Context, MenuFlavor, SessionFlavor } from "../deps.ts";
import { SessionData } from "./session.ts";

type MyContext = Context & SessionFlavor<SessionData>;
export type MyMenuContext = MyContext & MenuFlavor;

export default MyContext;
