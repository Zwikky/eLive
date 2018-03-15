import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ShowsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShowsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ShowsProvider Provider');
  }

}
