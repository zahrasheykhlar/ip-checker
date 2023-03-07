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
    constructor(){
       
    }
}
