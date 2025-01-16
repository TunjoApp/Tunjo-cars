import sql from 'better-sqlite3';
const db = sql('tunjoCars.db');

import { vehicles, testimonials } from './db/index.mjs';

// Create tables
db.prepare(`
    CREATE TABLE IF NOT EXISTS vehicles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        model TEXT NOT NULL,
        year TEXT NOT NULL,
        price TEXT NOT NULL,
        image TEXT NOT NULL,
        description TEXT NOT NULL
    )
`).run();

db.prepare(`
    CREATE TABLE IF NOT EXISTS testimonials (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        author TEXT NOT NULL,
        date TEXT NOT NULL,
        rating TEXT NOT NULL
    )
`).run();

async function initData() {
    const vehiclesTable = db.prepare(`
        INSERT INTO vehicles (name, image, model, year, price, description) 
        VALUES (@name, @image, @model, @year, @price, @description)
    `);

    const testimonialsTable = db.prepare(`
        INSERT INTO testimonials (title, content, author, date, rating) 
        VALUES (@title, @content, @author, @date, @rating)
    `);

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
