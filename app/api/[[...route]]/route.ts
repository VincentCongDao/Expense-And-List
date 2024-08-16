import { Hono } from "hono";
import { handle } from "hono/vercel";

import author from "./author";
import book from "./book";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({ hello: "World" });
});

export const GET = handle(app);
export const POST = handle(app);

// app.get("/hello", clerkMiddleware(), (c) => {
//   const auth = getAuth(c);

//   if (!auth?.userId) {
//     return c.json({
//       error: "User is not authorized",
//     });
//   }
//   return c.json({
//     message: "Hello Next.js!",
//     userId: auth.userId,
//   });
// });
