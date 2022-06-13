const { Router } = require('express');
const{ Episode } = require('../models/Episode');

module.exports = Router()
  .get('/', async (req, res) => {
    const episodeData = await Episode.getAll();
    res.json(episodeData);
  }
  );
