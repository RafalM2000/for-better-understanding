import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUserInfo } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<IUserInfo[]> {
    const jsonFileUrl = 'assets/source.json';
    return this._http.get<IUserInfo[]>(jsonFileUrl)
  }
}