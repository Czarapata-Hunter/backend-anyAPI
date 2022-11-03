const { Router } = require('express');
const HouseColors = require('../models/HouseColors.js');

module.exports = Router().get('/', async (req, res) => {
  const houses = await HouseColors.getAllHouses();
  const filtered = houses.map(({ id, name }) => ({ id, name }));
  res.json(filtered);
});
