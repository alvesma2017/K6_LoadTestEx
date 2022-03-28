import GetTest from "/cenarios/basic.js";
import {group , sleep} from 'k6';


export default () => {
    group('LoadTest - PeekTest', () => {
        GetTest();
    });

    sleep(1);
}