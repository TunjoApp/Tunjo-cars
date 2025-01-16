import sql from 'better-sqlite3'

const db = sql('tunjoCars.db')

export function getTestimonials() {
    return db.prepare('SELECT * FROM testimonials').all()
}
