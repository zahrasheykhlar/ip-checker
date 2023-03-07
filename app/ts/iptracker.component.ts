import { Component, OnInit } from 'angular2/core';
import { Config } from './config.service';
import { Location } from './location';


declare let L;

@Component({
    selector: 'iptracker',
    templateUrl: 'app/ts/iptracker.component.html',
    styleUrls: ['app/ts/iptracker.component.css'],
})

export class IpTrackerComponent implements OnInit {
    mainHeading = Config.MAIN_HEADING;
    search: string = '';
    location: Location;
    constructor() {
       
    }
    ngOnInit() {
        this.location = new Location(1,
            "46.128.196.213",
            "Google LLC",
            "Mountain View",
            "US",
            5375480,
            37.38605,
            -122.08385,
            "94035",
            "California",
            "-08:00");
         
        this.leafMap();
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
}