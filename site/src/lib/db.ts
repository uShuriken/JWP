import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';

let db: Database | null = null;

export async function getDb() {
  if (!db) {
    db = await open({
      filename: path.join(process.cwd(), 'content.db'),
      driver: sqlite3.Database
    });
    
    // Create the initial table schema
    await db.exec(`
      CREATE TABLE IF NOT EXISTS pages (
        id TEXT PRIMARY KEY,
        content TEXT NOT NULL
      );
    `);
  }
  return db;
}
