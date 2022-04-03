import http from 'k6/http';
import { check, sleep } from 'k6';


export default function () {
  const res = http.get('http://localhost:8080/manifesto_pod');
  check(res, { 'Status 200': (r) => r.status == 200 });
  sleep(1);
}