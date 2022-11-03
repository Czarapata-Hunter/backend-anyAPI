const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
// const request = require('../lib/app.js');
const request = require('supertest');
const app = require('../lib/app');
// const request = require('supertest');

const { types } = require('../lib/types-data');

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

  afterAll(() => {
    pool.end();
  });
});
