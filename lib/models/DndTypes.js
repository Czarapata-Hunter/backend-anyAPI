const pool = require('../utils/pool');
module.exports = class DndTypes {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.hitDice = row.hit_dice;
  }

  static async getAllTypes() {
    const { rows } = await pool.query('SELECT * from dnd_types');
    return rows.map((typeRow) => new DndTypes(typeRow));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * from dnd_types WHERE id = $1', [
      id,
    ]);

    return new DndTypes(rows[0]);
  }
};
