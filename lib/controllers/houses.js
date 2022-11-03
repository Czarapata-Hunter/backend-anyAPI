const { Router } = require('express');

module.exports = Router().get('/', async (req, res) => {
  const types = await HouseColors.getAllHouses();
  const filtered = houses.map(({ id, name }) => ({ id, name }));
  res.json(filtered);
});
