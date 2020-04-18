import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import {Updates} from './updates';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(public http:HttpClient) { }

  public url ="https://en5pxn2yfw6x9.x.pipedream.net/";
  public url1 = "/assets/localupdates.json";
  public url2 = 'http://192.168.1.158:5003/insert';
  public url3 = 'http://192.168.1.158:5003/all_user';
  public url4 = 'http://192.168.1.143:5003/delete';
  public url5 = 'http://192.168.1.158:5003/update';
  public url6 = 'http://192.168.1.158:5003/user';

  public httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json',})
  };
  public obj : Updates;
  public datefordetail;
  public employeecodesearch;
  public departmentsearch;



  makeupdate(model): Observable<any>
  {
    model=JSON.stringify(model);
    console.log(model);
    return this.http.post(this.url,model,this.httpOptions)
  }

  getupdates() : Observable<any>
  {
    return this.http.get(this.url1);
  }
  getupdatesbyemployeecode(employeecode): Observable<any>
  {   
  const n=`${this.url6}/${employeecode}`;
  return this.http.get(this.url1);//change to const n when api is made
  }
  getupdatesbydepartmentcode(departmentcode): Observable<any>
  {   
  const n=`${this.url6}/${departmentcode}`;
  return this.http.get(this.url1);
  }

  update(model) : Observable<any>
  {
    const n =`${this.url5}/${model.employeecode}`;
    return this.http.put(this.url,model);

  }
 

}







