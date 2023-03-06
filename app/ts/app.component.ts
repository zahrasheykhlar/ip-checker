import { Component } from 'angular2/core';

import { Location } from './location';
import { IpTrackerComponent } from './iptracker.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    styleUrls: ['app/ts/app.component.css'],
    directives:[IpTrackerComponent]
})

export class AppComponent {
    location: Location;

    constructor(){
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
             "-08:00")
    }
}
