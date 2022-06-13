const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()
  .get('/', async (req, res) => {
    const charData = await Character.getAll();
    res.json(charData);
  }
  );
