import {  Injectable} from '@angular/core';
import {  Http,  Response} from '@angular/http';
import {  Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {  Bars} from '../model/data';

@Injectable()
export class ProgressInfoService {

  constructor(private http: Http) {}

  getBars(): Observable < Bars > {
    const url: string = 'http://pb-api.herokuapp.com/bars';
    return this.http.get(url)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
}

}
