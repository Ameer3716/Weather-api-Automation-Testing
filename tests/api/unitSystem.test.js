const frisby = require('frisby');
require('dotenv').config();

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

describe('GET /weather with different units', () => {
  it('should return temperature in metric units', async () => {
    await frisby
      .get(`${BASE_URL}/weather?q=London&appid=${API_KEY}&units=metric`)
      .expect('status', 200)
      .expect('jsonTypes', 'main.temp', frisby.Joi.number());
  });

  it('should return temperature in imperial units', async () => {
    await frisby
      .get(`${BASE_URL}/weather?q=London&appid=${API_KEY}&units=imperial`)
      .expect('status', 200)
      .expect('jsonTypes', 'main.temp', frisby.Joi.number());
  });

  it('should return temperature in standard units', async () => {
    await frisby
      .get(`${BASE_URL}/weather?q=London&appid=${API_KEY}&units=standard`)
      .expect('status', 200)
      .expect('jsonTypes', 'main.temp', frisby.Joi.number());
  });
});
