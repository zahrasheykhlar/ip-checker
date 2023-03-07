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
        this.location = new Location(1, '', '', '', '', 0, 0, 0, '', '', '');
    }

    private showMap(lat: number, lng: number) {
        if (lat && lng) {
            var container = L.DomUtil.get('map');
            if (container != null) {
                container._leaflet_id = null;
            }

            const map = L.map('map').setView([lat, lng], 16);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);

            map.zoomControl.remove();

            var marker = L.marker([lat, lng], {
                icon: L.icon({
                    iconUrl: '../images/icon-location.svg'
                }),
            }).addTo(map);
        }
    }

    onSub(searchIP) {
        if (searchIP) {
            this.setLocation(searchIP);
        }
    }

    private setLocation(num: any) {
        if (localStorage.getItem(num)) {
            this.location = JSON.parse(localStorage.getItem(num));
            this.showMap(this.location.latitude, this.location.longitude);
        }
        else {
            this._httpService.getLocationByIp(num).subscribe(res => {
                let body = JSON.parse(res['_body']);
                if (body) {
                    this.location.ipaddress = num;
                    this.location.isp = body.isp;
                    this.location.city = body.location.city;
                    this.location.country = body.location.country;
                    this.location.geonameId = body.location.geonameId;
                    this.location.latitude = body.location.lat;
                    this.location.longitude = body.location.lng;
                    this.location.postalCode = body.location.postalCode;
                    this.location.region = body.location.region;
                    this.location.timezone = body.location.timezone;

                    this.showMap(body.location.lat, body.location.lng);

                    localStorage.setItem(num, JSON.stringify(this.location));
                }
            });
        }

    }

    ngOnInit() {
        // localStorage.clear();
        this._httpService.getIpAddress().subscribe(res => {
            let body = JSON.parse(res['_body'])
            if (body) {
                this.location.ipaddress = body.ip;
                this.setLocation(this.location.ipaddress)
            }
        });
    }


}