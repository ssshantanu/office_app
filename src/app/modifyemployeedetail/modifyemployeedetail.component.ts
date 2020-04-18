import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import {EmpService} from '../emp.service'
import { Employeet } from '../empt'; 
import {DepartmentService} from '../department.service';

@Component({
  selector: 'app-modifyemployeedetail',
  templateUrl: './modifyemployeedetail.component.html',
  styleUrls: ['./modifyemployeedetail.component.css']
})
export class ModifyemployeedetailComponent implements OnInit {

  constructor(public route: ActivatedRoute,public serve: EmpService, public router : Router,public departmentservice : DepartmentService) { }
  public arr ;
  public employeecode;
  public departments;
  public model :Employeet =
  {
    username:'',
    password:'',
    employeecode : '',
  	fname:'',
  	lname:'',
  	mail:'',
  	no:0,
  	dob:null,
  	gender:'',
    doj:null,
    department:'',
    role:''
  };

  ngOnInit() 
  {
    this.model=this.serve.employee;
  //this.employeecode=this.route.snapshot.paramMap.get('employeecode');
  // this.serve.getempbyemployeecode(this.employeecode).subscribe(data => 
  // {    
  //   this.arr = data;
  //   this.model=data[3];
  //   this.serve.id=data[0];
  // },
  // error=>{});
  this.departmentservice.getdepartment().subscribe(res=>{this.departments=res;},error=>{});
  }
  
 
  
  
  validate()
  {
    const at =this.model.mail.indexOf('@');
    const dot=this.model.mail.lastIndexOf(".");
    console.log(this.model);
         
    if(this.model.fname==""||this.model.fname==null)
      {
   	    alert("name cant be blank");
        
      }      
    else if(at<1 || dot< at+2 || dot+2>=this.model.mail.length)
      {  
        alert("Please enter a valid e-mail address");  
         
      }        
    else if(this.model.no.toString().length!=10)
      {
   	    alert("phone no should be of 10 number");
      
      }
      else
       {
        
        this.serve.modifyemp(this.model).subscribe(res=>
        {
        alert("Employee has been updated");
        this.router.navigate(["/admin/viewemployee"]);
        },
        error =>{console.log(error)});
        console.log("Updated the employees");
        this.serve.id=null;
        }
  }
  

}






