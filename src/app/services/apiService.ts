import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<UserInfo> {
    const jsonFileUrl = 'assets/source.json';
    return this._http.get<UserInfo>(jsonFileUrl);
  }
}