import { session } from "../deps.ts";

export type SessionData = {
  messages: number;
  id: number;
};

function initial(): SessionData {
  return { messages: 10, id: 0 };
}

export default session({
  initial,
});
