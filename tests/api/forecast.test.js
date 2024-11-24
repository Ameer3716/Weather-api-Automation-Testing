const frisby = require('frisby');
require('dotenv').config();

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

describe('GET /forecast', () => {
  it('should return forecast data for 5 days', async () => {
    const response = await frisby
      .get(`${BASE_URL}/forecast?q=London&appid=${API_KEY}&units=metric`)
      .expect('status', 200);

    const forecastList = response.json.list;
    expect(forecastList.length).toBeGreaterThan(0);
  });
});
