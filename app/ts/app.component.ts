import { Component } from 'angular2/core';
import { IpTrackerComponent } from './iptracker.component';
import { HTTP_PROVIDERS, Http } from 'angular2/http';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    styleUrls: ['app/ts/app.component.css'],
    directives:[IpTrackerComponent]
})

export class AppComponent {
    constructor(){}
}
