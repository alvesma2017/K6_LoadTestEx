import http from 'k6/http';
import { sleep } from 'k6';
import { Trend, Rate, Counter } from "k6/metrics";
import { check, fail } from "k6";

//tempo (mls) da requisicao
export let GetCustomerDuration = new Trend('get_customer_duration');
//metrica percentual de falha requisicao
export let GetCustomerFailRate = new Rate('get_customer_fail_rate');
//metrica percentual de sucesso requisicao
export let GetCustomerSuccessRate = new Rate('get_customer_success_rate');
//metrica de percentual de requisicao
export let GetCustomerReqs = new Rate('get_customer_reqs');

export default function () {
    let res = http.get('http://www.uol.com.br')
    
    GetCustomerDuration.add(res.timings.duration);
    GetCustomerReqs.add(1);
    GetCustomerFailRate.add(res.status == 0 || res.status > 399);
    GetCustomerSuccessRate.add(res.status < 399);

    let durationMsg = 'Max Duration ${1000/1000}s'
    if(!check(res, {
        'max duration': (r) => r.timings.duration < 1000,
    })){
        fail(durationMsg);
    }
    
    sleep(1);

}