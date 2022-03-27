import GetCustomer from "./cenarios/http_get.js";
import {group , sleep} from 'k6';


export default () => {
    group('Endpoint Get Customer - Controller Customer - OnionArchitecture.Api', () => {
        GetCustomer();
    });

    sleep(1);
}