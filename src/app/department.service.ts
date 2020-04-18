import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
  
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(public http:HttpClient) { }

  public url ="https://en5pxn2yfw6x9.x.pipedream.net/"
  public url1 = 'assets/departments.json';
  public url2 = 'http://192.168.1.158:5008/create_department';
  public url3='http://192.168.1.158:5008/all_department';
  public url4='http://192.168.1.158:5008/delete';
  public url5='http://192.168.1.158:5008/update';
  

  public department;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',})
    };
    public obj:{departmentcode:'',departmentname:''}
 

  getdepartment(): Observable<any>
  {
  return this.http.get(this.url1);
  }
  dele(departmentcode : string) : Observable<{}>
 {
  const n=`${this.url}/${departmentcode}`;
  return this.http.delete(n)
 }
 makedepartment(model): Observable<any> 
 {
  console.log(model);
  model=JSON.stringify(model);
  return this.http.post(this.url, model, this.httpOptions)
 }

modify(model)
{
 this.obj = model;
}

 modifydepartment(model) : Observable <any>
 {
  const n=`${this.url}/${model.departmentcode}`;
  model=JSON.stringify(model);
  console.log(model);
  return this.http.put(n,model,this.httpOptions)
 }



}















