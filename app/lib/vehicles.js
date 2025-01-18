import sql from "better-sqlite3";

const db = sql("tunjoCars.db");

export function getVehicles() {
  return db.prepare("SELECT * FROM vehicles").all();
}

export function getVehicle(id) {
  return db.prepare("SELECT * FROM vehicles WHERE id = ?").get(id);
}

export function getAllVehicleIds() {
  return db
    .prepare("SELECT id FROM vehicles")
    .all()
    .map((row) => row.id.toString());
}
