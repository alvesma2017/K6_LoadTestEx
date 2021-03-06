import http from 'k6/http';
import { check } from 'k6';
import { jUnit, textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';
export const options = {
  stages: [
    { duration: '10s', target: 10 }, //stages
    { duration: '20s', target: 10},
    { duration: '10s', target: 5},
  ],
  thresholds: {
    http_req_duration: ['p(95)<250'], 
  },
};
export default function () {
//   let res = http.get(`${__ENV.API_PROTOCOL}://${__ENV.API_BASEURL}/Product/GetAllProducts`);
     let res = http.get('http://www.google.com');
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}
export function handleSummary(data) {
  let filepath = `./${__ENV.TESTRESULT_FILENAME}-result.xml`;
    return {
        'stdout': textSummary(data, { indent: ' ', enableColors: true}), 
        './loadtest-results.xml': jUnit(data), 
    }
}