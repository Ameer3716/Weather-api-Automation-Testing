import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 50 }, // Ramp-up
    { duration: '2m', target: 200 }, // Peak load
    { duration: '1m', target: 0 },  // Ramp-down
  ],
};

const cities = ['RandomCity1', 'RandomCity2', 'London', 'InvalidCity', 'Paris'];

export default function () {
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  const res = http.get(`https://api.openweathermap.org/data/2.5/weather?q=${randomCity}&appid=YOUR_API_KEY&units=metric`);
  check(res, {
    'status is not 500': (r) => r.status !== 500,
  });
}
