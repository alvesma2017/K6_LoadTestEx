import http from 'k6/http';
import { sleep } from 'k6';
import { Trend, Rate, Counter } from "k6/metrics";
import { check, fail } from "k6";

// contagem de requisicao

export const requests = new Counter('http_reqs');

//rampas

export const options = {
  stages: [
    { target: 500, duration: '1m' }, //peek test
    { target: 350, duration: '1m' },
    { target: 200, duration: '1m' },
  ],
  thresholds: {
    requests: ['count < 100'],
  },
};

export default function () {
  // HTTP request

  const res = http.get('http://localhost:8080/manifesto_pod');

  sleep(1);

  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.indexOf('Feel free to browse') !== -1,
  });
}