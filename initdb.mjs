import sql from "better-sqlite3";
const db = sql("tunjoCars.db");

import { vehicles, testimonials, owners } from "./db/index.mjs";

// Create tables

db.exec("PRAGMA foreign_keys = OFF;"); // Temporarily disable foreign key constraints

db.exec(`
    DROP TABLE IF EXISTS vehicles;
    DROP TABLE IF EXISTS owners;
    DROP TABLE IF EXISTS testimonials;
`);

db.exec("PRAGMA foreign_keys = ON;"); // Re-enable foreign key constraints

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS owners (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        address TEXT NOT NULL,
        idType TEXT NOT NULL
    )
`,
).run();

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS vehicles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        brand TEXT NOT NULL,
        model TEXT NOT NULL,
        year TEXT NOT NULL,
        version TEXT NOT NULL,
        traction TEXT NOT NULL,
        motor TEXT NOT NULL,
        fuel TEXT NOT NULL,
        transmission TEXT NOT NULL,
        kilometers TEXT NOT NULL,
        armor TEXT,
        price TEXT NOT NULL,
        image TEXT NOT NULL,
        description TEXT,
        owner TEXT SECONDARY KEY REFERENCES owners(id)
    )
`,
).run();

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS testimonials (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        author TEXT NOT NULL,
        date TEXT NOT NULL,
        rating TEXT NOT NULL
    )
`,
).run();

async function initData() {
  const ownerTable = db.prepare(`
    INSERT INTO owners (id, name, email, phone, address, idType)
    VALUES (@id, @name, @email, @phone, @address, @idType)
`);

  const vehiclesTable = db.prepare(`
    INSERT INTO vehicles (name, brand, model, year, version, traction, motor, fuel, transmission, kilometers, armor, price, image, description, owner)
    VALUES (@name, @brand, @model, @year, @version, @traction, @motor, @fuel, @transmission, @kilometers, @armor, @price, @image, @description, @owner);
    `);

  const testimonialsTable = db.prepare(`
        INSERT INTO testimonials (title, content, author, date, rating)
        VALUES (@title, @content, @author, @date, @rating)
    `);

  // Insert vehicles data
  for (const owner of owners) {
    ownerTable.run(owner);
  }

  // Insert vehicles data
  for (const vehicle of vehicles) {
    vehiclesTable.run(vehicle);
  }

  // Insert testimonials data
  for (const testimonial of testimonials) {
    testimonialsTable.run(testimonial);
  }
}

// Initialize database with data
initData();
