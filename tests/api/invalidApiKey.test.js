const frisby = require('frisby');
require('dotenv').config();

const BASE_URL = process.env.BASE_URL;

describe('GET /weather with invalid API key', () => {
  it('should return 401 Unauthorized for an invalid API key', async () => {
    await frisby
      .get(`${BASE_URL}/weather?q=London&appid=INVALID_API_KEY&units=metric`)
      .expect('status', 401)
      .expect('json', 'message', 'Invalid API key');
  });
});
