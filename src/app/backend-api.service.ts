import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class BackendApiService {

  private listUrl: string;

  constructor(private _http: Http) { }

  getAllCases() {
    this.listUrl = 'http://www.mocky.io/v2/584869ab100000d20c4e2f87';
    return this._http.get(this.listUrl)
    .map(res => res.json());
  }

}
