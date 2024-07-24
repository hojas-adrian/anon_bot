export const VERSION = [0, 0, 0];

export const BOT_TOKEN = Deno.env.get("BOT_TOKEN") as string;
export const GROUP_ID = Deno.env.get("GROUP_ID") as string;
export const ADMINS_IDS = (Deno.env.get("ADMIN_ID") as string).split(" ");
