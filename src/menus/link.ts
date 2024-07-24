import sendMessage from "../handlers/cq_send_message.ts";
import sendReply from "../handlers/cq_send_reply.ts";
import { Menu } from "../deps.ts";
import MyContext from "../helpers/context.ts";

export default new Menu<MyContext>("links", { autoAnswer: false })
  .text(
    {
      text: "responder mensaje",
    },
    sendReply
  )
  .text(
    {
      text: "enviar mensaje",
    },
    sendMessage
  );
