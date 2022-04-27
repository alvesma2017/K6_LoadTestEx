import http from 'k6/http';
import {check,sleep} from 'k6'

export default function () {
  const url = 'https://rotas-mobile.ht.bmais.b.br/bmais-mobile/v1/pix/chaves';

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'idDispositivo': '123456789',
      'idRequisicao': 'jfhjhfkj23hkjhefghtio',
      'userToken': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJpQmFua2luZ09TVFMiLCJpYXQiOjE2NTA0NjEyNjQ1NzcsImV4cCI6MTY1MDQ2MzA2NDU3Nywic3ViIjoiMDEyMzIwNTA1MDQiLCJsdHkiOiJodHRwOi8vaWJhbmtpbmcuYmFuZXNlLmNvbS5ici9EaWdpdGFsTG9naW5Ub2tlbiIsInVzciI6MTUwOTE5Niwic2lkIjoiMnpvdnZ5bDI1amVqcXAiLCJ0cm0iOjEwMDAwMDQwMDAxLCJhdXQiOnRydWUsInB0YSI6IjAxMjMyMDUwNTA0IiwiYXBwIjoxNjMyNDk1LCJpYXUiOjEwNTk1NTYwfQ==.DhJpc9do7kEiBxNuKnWEXC4G9J0R/XOhrwOs2EHXjbIf0UkoFbMN7Y1w5gAPYePL0YOtm7exntsKVMUAxwtHH6Q3TnAPuRBqy/P3jExumRh/YtJ6Q0DH9zwirtAh0nUlR8izNviouiqh8vNuKKVB+B/Fb4NtIHhJ0k4JU6BmORqPgKuonNXNhSTpzxoKtRadqk8uB/6ADxeqRQKMb7WnZS6kc97epz7ikkw68xHLmYto4HyYJS42DW4Ht6ux4agCLMpiburX3a4ReGnDyzuiGHS1RoTHMk+YWrG/yXXnR75wh2rRXNUV3tw4q/DF81Bf4ShLMMpGc1hgMIW06vV91A==',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJpQmFua2luZ09TVFMiLCJpYXQiOjE2NTEwMDQxNjYyODcsImV4cCI6MTY1MTA2NDEwNjI4Nywic3ViIjoiMDIzNDU5ODI1NTEiLCJsdHkiOiJodHRwOi8vaWJhbmtpbmcuYmFuZXNlLmNvbS5ici9EaWdpdGFsTG9naW5Ub2tlbiIsInVzciI6NjcxODEsInNpZCI6IjJ6b3dmYWwyZzQ2aGltIiwidHJtIjoxMDAwMDA0MDAwMSwiYXV0Ijp0cnVlLCJwdGEiOiIwMjM0NTk4MjU1MSIsImFwcCI6NjE2MzEsImlhdSI6NDQ5NTYyfQ==.n1yjenN43OhgVdjx8U8oz6jA0dOWcE9r8iYxHRy+xOcbrLPHjayw0o8VdH5m4NA7IxKhJz+BGkjkFv/8HYr95mWmMENoR270VBEV3A9B9dSMWTmcNgzpIQ4h6WBwdrkMp/4kJK99VrFkoKPsDa464u8an/mFbIECn3qRzn5Vf90o33FoQ2zwPFQnN6zUacAu65juV9zlXR3rpPxqgXZPiY/vSzG2tUzr4LbmjFAppCZvBYYtRV0RuRcxlXRovrTGHLkndPSwf/1vpuXEGbLZQK3sxtGC2E0NpuAzgmSMUbpc3oos6XnrE5INy+sZiGtU46W6tK1p3F9HlFv5mPVCZw=='
    }
  };

  const res = http.get(url, params);
  check(res, {'status 200': (r) => r.status == 200})
  sleep(1)

 
  
}