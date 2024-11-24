const frisby = require('frisby');
require('dotenv').config();

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

describe('GET /weather temperature range', () => {
  it('should ensure temp_max >= temp_min', async () => {
    const response = await frisby
      .get(`${BASE_URL}/weather?q=London&appid=${API_KEY}&units=metric`)
      .expect('status', 200);

    const tempMax = response.json.main.temp_max;
    const tempMin = response.json.main.temp_min;
    expect(tempMax).toBeGreaterThanOrEqual(tempMin);
  });
});
