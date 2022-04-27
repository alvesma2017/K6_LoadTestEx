import http from "k6/http";
import {check,sleep} from 'k6'

export default function () {
    //const res = http.get('https://k6.io/')
    const res = http.get('https://rotas-mobile.prd.bmais.b.br/bmais-mobile')
    check(res, {'status 200': (r) => r.status == 200})
    sleep(1)
}