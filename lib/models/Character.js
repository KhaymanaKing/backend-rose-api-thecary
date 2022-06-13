const pool = require('../utils/pool');
const { Quote } = require('./Quote');

class Character {
  id;
  first_name;
  last_name;
  quotes;

  constructor(row) {
    this.id = row.id;
    this.first_name = row.first_name;
    this.last_name = row.last_name;
    this.quotes =
      row.quotes.length > 0 ? row.quotes.map((quote) => new Quote(quote)) : [];
  }

  static async getAll() {
    // implement getAll() method to return all characters with a list of quotes
    const { rows } = await pool.query('SELECT * FROM characters');
    return rows.map((row) => new Character(row));
  }
  static async getById(id){
    const { rows } = await pool.query('SELECT FROM cgaracters where id=$1', [id]);
    if(!rows[0]) return null;
    return new Character(rows[0]);
  }
}

module.exports = Character;
