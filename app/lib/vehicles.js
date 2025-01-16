import sql from "better-sqlite3";

const db = sql("tunjoCars.db");

export function getVehicles() {
  return db.prepare("SELECT * FROM vehicles").all();
}
