import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {User} from "./User";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Http, Response} from "@angular/http";

@Injectable()
export class AfpService {
  private Url = 'http://localhost:8080/user';
  private UrlSort = 'http://localhost:8080/user/rank';

  constructor(private http : Http) { }

  findAll(): Observable<User[]>  {
    return this.http.get(this.Url)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  findAllSort(): Observable<User[]>{
    return this.http.get(this.UrlSort)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }

    findById(id: number): Observable<User> {
      return null;
    }

    saveUser(user: User): Observable<User> {
    return this.http.post(this.Url, user)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

      deleteUserById(id: number): Observable<boolean> {
        return this.http.delete(this.Url + '/' + id)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

    updateUser(user: User): Observable<User> {
      return this.http.put(this.Url, user).catch(err => Observable.throw(err.json().error || 'Server Error'));

    }
}
