import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class User {
  data: any;

  constructor(private http: Http) {
    this.data = null;
  }

  getUser(userName) {
    var userName = userName;

    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('build/api/user/mock-users.json')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference

          function findUser(user) {
            return user.userName === userName;
          }
          this.data = data.users.find(findUser);
          resolve(this.data);
        });
    });
  }
}
