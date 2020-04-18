import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Employeet} from '../app/empt';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }
  private url ="https://en5pxn2yfw6x9.x.pipedream.net/";
  public url1="http://192.168.1.158:5002/login?log"
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',})
    };
  
  public detail : Employeet;

  match(model): Observable<any>
  {
    model=JSON.stringify(model);
    console.log(model);
   return this.http.post(this.url1,model,this.httpOptions);
  }

} 



