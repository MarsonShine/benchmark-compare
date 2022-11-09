import http from 'k6/http';

import { check } from 'k6';

export default function(){

    const res = http.get('http://localhost:5000/WeatherForecast');

    check(res, {
        'status is 200': (r) => r.status === 200
    });
}

// k6 run .\k6.api.benchmark.js --vus 50 --duration 30s