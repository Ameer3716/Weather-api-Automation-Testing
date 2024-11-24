const frisby = require('frisby');
require('dotenv').config();

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

describe('GET /weather by coordinates', () => {
  it('should return weather data for valid coordinates', async () => {
    await frisby
      .get(`${BASE_URL}/weather?lat=51.5074&lon=-0.1278&appid=${API_KEY}&units=metric`) // London
      .expect('status', 200)
      .expect('json', 'name', 'London');
  });

  it('should return 400 for missing coordinates', async () => {
    await frisby
      .get(`${BASE_URL}/weather?lat=&lon=&appid=${API_KEY}`)
      .expect('status', 400)
      .expect('json', 'message', 'Nothing to geocode');
  });
});
