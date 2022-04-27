import http from 'k6/http';
import {check,sleep} from 'k6'

export default function () {
  const url = 'https://rotas-mobile.ht.bmais.b.br/bmais-mobile/v3/seguranca/ibanking-security/login-app';
  const payload = JSON.stringify( {
    cpf: '02345982551',
    senha: 'h+1zJMEqBefacLlmG8djB94+kWot5GgVVUv7p88OloyNyIUnFpAg+SYRqrzKeKm7qcbwjTY46LwyQzB6IE75xs5hsd7/QCpzPGnJfbrzToJcDAMVdu2WMJRsOqSNCO6W84x5NP+h+35uA2c3vN+Qo2k2wx+GltijeKh87jK6KSFR0vlolaNq8WqIYF5JPXxaRMG/ofh3AtDPScGC1R2yLSycjh0hJp+3qrt047PlLJFbrSy6KgnVPwrQ+rI1fkfWiETV9W39mEVozXGeKF6clqLf+Yql6HzIMF0+EQ39JwG+QuLU2+Kwt0UHiGaATyqigiG2nIOeebjyl0VmotVVjA==',
    nomeDispositivo: 'Iphone de Marlucinha'
  });
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'key-identifier': '{"key":"BESBMAIStstns/BN047_BMAIS_TST","cym":"NOT_INFORMED","pad":"PKCS5","iv":null}',
      'idDispositivo': '123456789',
      'terminal': '10000040001',
      'idRequisicao': 1
    }
  };
    const res = http.post(url, payload, params);
    check(res, {'status 200': (r) => r.status == 200})
    sleep(1)

  
}