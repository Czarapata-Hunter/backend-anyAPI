const pool = require('../utils/pool');
module.exports = class HouseColors {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.color = row.color;
  }

  static async getAllHouses() {
    const { rows } = await pool.query('SELECT * from harry_potter_houses');
    return rows.map((houseRow) => new HouseColors(houseRow));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * from harry_potter_houses WHERE id = $1',
      [id]
    );

    return new HouseColors(rows[0]);
  }
};
