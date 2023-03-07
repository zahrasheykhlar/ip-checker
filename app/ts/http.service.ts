
import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs';


@Injectable()
export class HTTPService {
  constructor(private http: Http) {}

  getIpAddress() {
    return this.http
      .get('https://api.ipify.org/?format=json');
  }

//   getGEOLocation(ip) {
//     let url =
//       'https://geo.ipify.org/api/v1?apiKey=at_7HteoFbDN1yZXCHt3PaZvOozsI8v4&domain=' +
//       ip;
//     return this.http.get(url).pipe(catchError(this.handleError));
//   }

//   private handleError(error: HttpErrorResponse) {
//     if (error.error instanceof ErrorEvent) {
//       console.error('An error occurred:', error.error.message);
//     } else {
//       console.error(
//         `Backend returned code ${error.status}, ` + `body was: ${error.error}`
//       );
//     }
//     return throwError('Something bad happened; please try again later.');
//   }
}
