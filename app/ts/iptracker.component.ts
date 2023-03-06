import { Component } from 'angular2/core';
import { Config } from './config.service';

@Component({
    selector: 'iptracker',
    templateUrl: 'app/ts/iptracker.component.html',
    styleUrls: ['app/ts/iptracker.component.css'],
    inputs: ['location']
})

export class IpTrackerComponent {
    mainHeading = Config.MAIN_HEADING;
    search: string = '';
    // location: Location;
    constructor() {

    }
}