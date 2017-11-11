import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import 'rxjs/add/operator/map';

const API_URL = "https://www.google.com";


@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  getSearchResults() {
    return this.http.get(API_URL)
      .map(res => res.text());
  }


}
