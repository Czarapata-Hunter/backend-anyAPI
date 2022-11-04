const { Router } = require('express');
const HouseColors = require('../models/HouseColors.js');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const house = await HouseColors.getById(req.params.id);
    res.json(house);
  })

  .get('/', async (req, res) => {
    const houses = await HouseColors.getAllHouses();
    const filtered = houses.map(({ id, name }) => ({ id, name }));
    res.json(filtered);
  });
