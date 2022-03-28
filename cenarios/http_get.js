import http from 'k6/http';
import { sleep } from 'k6';
import { Trend, Rate, Counter } from "k6/metrics";
import { check, fail } from "k6";

//tempo (mls) da requisicao
export let GetAccessDuration = new Trend('get_access_duration');
//metrica percentual de falha requisicao
export let GetAccessFailRate = new Rate('get_access_fail_rate');
//metrica percentual de sucesso requisicao
export let GetAccessSuccessRate = new Rate('get_access_success_rate');
//metrica de percentual de requisicao
export let GetAccessPercReqs = new Rate('get_accessperc_reqs');

export default function () {
    let res = http.get('http://localhost:8080/manifesto_pod')
    
    GetAccessDuration.add(res.timings.duration);
    GetPercReqs.add(1);
    GetAccessFailRate.add(res.status == 0 || res.status > 399);
    GetAccessSuccessRate.add(res.status < 399);

    let durationMsg = 'Max Duration ${1000/1000}s'
    if(!check(res, {
        'max duration': (r) => r.timings.duration < 1000,
    })){
        fail(durationMsg);
    }
    
    sleep(1);

}