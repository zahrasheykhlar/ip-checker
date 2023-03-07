import { Injectable } from 'angular2/core';
import { Http, Headers } from 'angular2/http';

@Injectable()
export class HTTPService {
    private headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer WookieIP2022'
    });

    private API_URL: string = 'https://wookie.codesubmit.io/ipcheck?ip=';

    constructor(private http: Http) { }

    getIpAddress() {
        return this.http
            .get('https://api.ipify.org/?format=json');
    }

    getLocationByIp(ip) {
        let url = this.API_URL + ip;
        return this.http.get(url, {
            headers: this.headers
        });
    }
}
