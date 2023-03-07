import { Component, OnInit } from 'angular2/core';
import { Config } from './config.service';
import { Location } from './location';
import { HTTPService } from './http.service';
import { HTTP_PROVIDERS } from 'angular2/http';


declare let L;

@Component({
    selector: 'iptracker',
    templateUrl: 'app/ts/iptracker.component.html',
    styleUrls: ['app/ts/iptracker.component.css'],
    providers: [HTTPService, HTTP_PROVIDERS]
})

export class IpTrackerComponent implements OnInit {
    mainHeading = Config.MAIN_HEADING;
    search: string = '';
    location: Location;
    constructor(private _httpService: HTTPService) {

    }
    private leafMap() {
        var container = L.DomUtil.get('map');

        const map = L.map('map').setView([this.location.latitude, this.location.longitude], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        map.zoomControl.remove();

        var marker = L.marker([this.location.latitude, this.location.longitude], {
            icon: L.icon({
                iconUrl: '../images/icon-location.svg'
            }),
        }).addTo(map);
    }
    ngOnInit() {
        this.location = new Location(1,
            "8.8.8.8",
            "Google LLC",
            "Mountain View",
            "US",
            5375480,
            37.38605,
            -122.08385,
            "94035",
            "California",
            "-07:00");
        this._httpService.getIpAddress().subscribe(res => {
            console.log(res['_body']);
            let body = JSON.parse(res['_body'])
            if (body)
                this.location.ipaddress = body.ip;
        });
        this.leafMap();
    }


}