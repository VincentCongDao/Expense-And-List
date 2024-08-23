// src/migrate.ts

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" });

const databaseUrl = process.env.DATABASE_URL!;
export const sql = neon(databaseUrl);
export const db = drizzle(sql);
