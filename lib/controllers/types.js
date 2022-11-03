const { Router } = require('express');
const DndTypes = require('../models/DndTypes.js');

module.exports = Router().get('/', async (req, res) => {
  const types = await DndTypes.getAllTypes();
  const filtered = types.map(({ id, name }) => ({ id, name }));
  res.json(filtered);
});
