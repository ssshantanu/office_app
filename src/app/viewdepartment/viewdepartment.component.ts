import { Component, OnInit } from '@angular/core'; 
import {HttpClient} from '@angular/common/http'; 
import {DepartmentService} from '../department.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-viewdepartment',
  templateUrl: './viewdepartment.component.html',
  styleUrls: ['./viewdepartment.component.css']
})
export class ViewdepartmentComponent implements OnInit {
 
  constructor(public http:HttpClient, public serve : DepartmentService,public router : Router) { }
 public department ;
 public searchit : any;
 public arrsearch = [];
 public flag : boolean= true;

  ngOnInit() {
    this.serve.getdepartment().subscribe(data => this.department = data);
  } 

  del(departmentcode)
  {
    this.serve.dele(departmentcode).subscribe(data=>{},error=>{});
    console.log("delete request done");
    this.router.navigate(['/admin/viewdepartment'])
  }

  modify(arr)
  {
    console.log(arr);
    this.serve.obj= arr
    //var model ={departmentcode:arr[1],departmentname:arr[2]}
    //this.serve.modify(model);
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
   
   for(let i of this.department)
   {
    if(i.fname.search(obj)>=0||i.lname.search(obj)>=0||i.mail.search(obj)>=0||i.id==obj||i.no==obj)
    {
      this.arrsearch.push(i);
    }
   }
    console.log(this.arrsearch);
  }

}





















