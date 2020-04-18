import { Injectable } from '@angular/core'; 
import {HttpClient} from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import {Employeet} from './empt';
import { Observable } from 'rxjs';
   
  
@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(public http:HttpClient) { }

  public url ="https://en5pxn2yfw6x9.x.pipedream.net/";
  public url1 = 'assets/user.json';
  public url2 = 'http://192.168.1.158:5004/create';
  public url3='http://192.168.1.158:5004/all_user';
  public url4='http://192.168.1.158:5004/delete';
  public url5='http://192.168.1.158:5004/update';
  
public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',})
    };
    public id;
    public employeecode;
    public employee;
 

  getemp(): Observable<Employeet>
  {
  return this.http.get<Employeet>(this.url1);
  }

  getempbyemployeecode(employeecode): Observable<Employeet>
  {
    const n=`${this.url3}/${employeecode}`;
  return this.http.get<Employeet>(n);
  }



  dele(id : number) : Observable<{}>
 {
  const n=`${this.url}/${id}`;
  return this.http.delete(n)
 }
 makeRequest(model): Observable<any>
 {
  console.log(model);
  model=JSON.stringify(model);
  console.log(model);
  return this.http.post(this.url, model, this.httpOptions)
 }

modifyemp(model) : Observable <any>
 {
  const n=`${this.url}/${this.id}`;
  model=JSON.stringify(model);
  console.log(model);
  return this.http.put(this.url,model,this.httpOptions)
 }

    
}








