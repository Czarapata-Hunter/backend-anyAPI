const { Router } = require('express');
const DndTypes = require('../models/DndTypes');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const type = await DndTypes.getById(req.params.id);
    res.json(type);
  })
  .get('/', async (req, res) => {
    const types = await DndTypes.getAllTypes();
    const filtered = types.map(({ id, name }) => ({ id, name }));
    res.json(filtered);
  });
