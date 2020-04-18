import { Component, OnInit } from '@angular/core'; 
import {HttpClient} from '@angular/common/http';
import {Employeet} from '../empt';
import {EmpService} from '../emp.service'; 
import {Router} from '@angular/router';


@Component({
  selector: 'app-vemp',
  templateUrl: './vemp.component.html',
  styleUrls: ['./vemp.component.css']
})
export class VempComponent implements OnInit {
 
  constructor(public http:HttpClient, public serve : EmpService, public router :Router) { }
 public emp ;
 public searchit : any;
 public arrsearch = [];
 public flag : boolean= true;

  ngOnInit() {
    this.serve.getemp().subscribe(data => this.emp = data);
  } 

  del(id : number)
  {
    this.serve.dele(id).subscribe(data=>{},error=>{});
    console.log("delete request done");
    this.serve.getemp().subscribe(data => this.emp = data);
  }

  view(arr)
  {
    console.log(arr);
    this.serve.employee=arr;
    this.router.navigate(['/admin/viewemployeedetail/'])
    //routerlink can also be used without making the fuction
  }

  modify(arr)
  {
    console.log(arr);
    this.serve.employee=arr;
    this.router.navigate(['/admin/modifyemployeedetail/'])
    //routerlink can also be used without making the fuction

  }

  use()
  {
    this.searchit='';
    this.search();
  }

  search()
  { this.arrsearch=[]
    this.flag = false;
   const obj= this.searchit;
   
   for(let i of this.emp)
   {
    if(i.fname.search(obj)>=0||i.lname.search(obj)>=0||i.mail.search(obj)>=0||i.id==obj||i.no==obj)
    {
      this.arrsearch.push(i);
    }
   }
    console.log(this.arrsearch);
  }

}













