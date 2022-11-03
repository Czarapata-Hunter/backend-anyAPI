const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { types } = require('../lib/types-data');
const { houses } = require('../lib/houses-data');
// const {} = require('/models/DndTypes');
describe('types routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/types should return list of types', async () => {
    const res = await request(app).get('/types');
    const expected = types.map((type) => {
      return { id: type.id, name: type.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/types/:id should return type detail', async () => {
    const res = await request(app).get('/types/1');
    const barbarian = {
      id: '1',
      name: 'Barbarian',
      hitDice: 12,
    };
    expect(res.body).toEqual(barbarian);
  });
});

describe('houses routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/houses should return list of houses', async () => {
    const res = await request(app).get('/houses');
    const expected = houses.map((house) => {
      return { id: house.id, name: house.name };
    });
    expect(res.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
