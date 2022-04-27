import http from 'k6/http';
import {check,sleep} from 'k6'

export default function () {
  const url = 'https://rotas-mobile.ht.bmais.b.br/bmais-mobile/v1/onboardings';
  const payload = JSON.stringify({
    dispositivo:
    { id: '123456789',
      modelo: 'Redmi Note 8 Pro'}}) 

  const params = {
    headers: {
      'idRequisicao': 1,
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiIyZTc2MjZiNi03ZmRmLTQzNWQtYWQ3NS1jNzdiNDE2OGY4ZTMiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vYTZmN2FhZGYtNGNlYy00YWRjLWE5YjktNzM4YTZkOWYzZTJjL3YyLjAiLCJpYXQiOjE2NTA0NjA1NDIsIm5iZiI6MTY1MDQ2MDU0MiwiZXhwIjoxNjUwNDY0NDQyLCJhaW8iOiJFMlpnWVBoN2RoSFBLNGNuOFE1TUFob01CenAwQVE9PSIsImF6cCI6IjhjNmI5MTgzLThjYjAtNDEzNC1hNWRhLWEyOWJhYzdlNTVlYSIsImF6cGFjciI6IjEiLCJvaWQiOiIyNWQyODMxNS1hNmUxLTQ1NTEtOGU2Ni1iNmVhMjU0MDJmNWUiLCJyaCI6IjAuQVh3QTM2cjNwdXhNM0VxcHVYT0tiWjgtTExZbWRpN2ZmMTFEclhYSGUwRm8tT044QUFBLiIsInN1YiI6IjI1ZDI4MzE1LWE2ZTEtNDU1MS04ZTY2LWI2ZWEyNTQwMmY1ZSIsInRpZCI6ImE2ZjdhYWRmLTRjZWMtNGFkYy1hOWI5LTczOGE2ZDlmM2UyYyIsInV0aSI6IkFwOHBHb2NKT2tHRnViVnlENk1qQUEiLCJ2ZXIiOiIyLjAifQ.pctjwC2-xjYXuODCiJAbXpUfFXx1dWIEFJzAQpfNvkoBdUn2_VBsHdnahI9GOCVqZjy26wIbulztsXoNGFaW0o76NIDDCDZDQ4aH745it_YiAoYehu_wMj9tb0qrSIXFzspNQKcWZ_ZnJ2MWt3eEmJhCZPGTnDw1KlFR8KtRlz3vdMOAQ9WJEToSSVg7PugXX_QEA-li3mQNMxU9k3ebgdKYCivrwMlK41D0KvjC3gDdvufip9O1sP8Xp-crkhdz548o_ME-lCXmXsyNds_jvQXfygI9Wvp0BW9Po5Z2zioQCrAJ6QYGSyjEMjPvF1260zN1cMJZucUeOAF52RJKOw',
      'Content-Type': 'application/json'
    }

  };

    const res = http.post(url, payload, params);
    check(res, {'status 200': (r) => r.status == 200})
    sleep(1)

  
}