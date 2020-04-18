import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {EmpService} from '../emp.service'
import { Employeet } from '../empt';
import {DepartmentService} from '../department.service';
 
 
@Component({
  selector: 'app-cemp',
  templateUrl: './cemp.component.html',
  styleUrls: ['./cemp.component.css']
})

export class CempComponent implements OnInit {

  constructor(public router: Router,public serve: EmpService,public departmentservice : DepartmentService) { }
  
  ngOnInit() 
  {
    this.departmentservice.getdepartment().subscribe(res=>{this.departments=res;},error=>{});    
  }
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
        
          this.serve.makeRequest(this.model).subscribe(res => 
            {
              alert("Employee has been created");
              this.router.navigate(["/admin/viewemployee"]);
            },
            error =>{console.log(error)});
          
          console.log("created the employees");
         
        
         
         
       }
  }
 

    
}





