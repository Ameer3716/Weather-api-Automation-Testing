require('dotenv').config(); // Load environment variables

const frisby = require('frisby');
process.env.BASE_URL = "https://api.openweathermap.org/data/2.5";
process.env.API_KEY = "b1fd6e14799699504191b6bdbcadfc35";
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

// Check if environment variables are defined
if (!BASE_URL || !API_KEY) {
  throw new Error("BASE_URL or API_KEY is not defined in the environment variables.");
}

describe('GET /weather', () => {
  it('should return weather data for a valid city', async () => {
    await frisby
      .get(`${BASE_URL}/weather?q=London&appid=${API_KEY}&units=metric`)
      .expect('status', 200)
      .expect('json', 'name', 'London')
      .expect('jsonTypes', 'main.temp', frisby.Joi.number());
  });

  it('should return 404 for an invalid city', async () => {
    await frisby
      .get(`${BASE_URL}/weather?q=InvalidCity&appid=${API_KEY}&units=metric`)
      .expect('status', 404)
      .expect('json', 'message', 'city not found');
  });
});
