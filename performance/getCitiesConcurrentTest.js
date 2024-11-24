import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 100 }, // Ramp-up to 100 users
    { duration: '1m', target: 100 },  // Stay at 100 users
    { duration: '30s', target: 0 },   // Ramp-down
  ],
};

const cities = ['London', 'Paris', 'New York', 'Tokyo', 'Delhi'];

export default function () {
  cities.forEach((city) => {
    const res = http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
    check(res, {
      'status is 200': (r) => r.status === 200,
    });
  });
}
