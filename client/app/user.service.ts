import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

import { User } from './User';

@Injectable()
export class UserService {
 private baseUrl: string = 'http://localhost:1320/api'; 
 constructor(private http : Http){
  }
 getUsers(): Observable<User[]>{    
    return this.http.get(`${this.baseUrl}/user`)
                        // calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  getUser(id: number) : Observable<User>{
    return this.http
      .get(`${this.baseUrl}/user/${id}`)     
      .map((res:Response) => res.json())
       //errors if 
      .catch((error:any) => Observable.throw('Server error'));
  }
  createUser(user: User) : Observable<Response>{   
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http
      .post(`${this.baseUrl}/user`, JSON.stringify(user), {headers: headers})     
       //errors if 
      .catch((error:any) => Observable.throw('Server error'));
  }
  updateUser(user: User) : Observable<Response>{   
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http
      .put(`${this.baseUrl}/user/${user.UserId}`, JSON.stringify(user), {headers: headers})     
       //errors if 
      .catch((error:any) => Observable.throw('Server error'));
  }
  deleteUser(id: number) : Observable<Response>{
    return this.http
      .delete(`${this.baseUrl}/user/${id}`)     
       //errors if 
      .catch((error:any) => Observable.throw('Server error'));
  }
}