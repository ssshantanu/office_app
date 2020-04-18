import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmpService} from '../emp.service'
import { Employeet } from '../empt';

@Component({
  selector: 'app-editdetail',
  templateUrl: './editdetail.component.html',
  styleUrls: ['./editdetail.component.css']
})
export class EditdetailComponent implements OnInit {

  constructor(public router: Router,public serve: EmpService) { }

  ngOnInit() 
  {
    this.serve.getemp().subscribe(data=>{this.employees=data;this.model=this.employees[1]})
    //in the above line a tempory data is displayed on the edit detail page

    // this.serve.getempbyemployeecode(this.serve.employeecode).subscribe(data => 
    //   {
    //     //this.arr = data;
    //     this.model=data[3];
    //     this.serve.id=data[0];
    //   },
    //   error=>{});
    // //here we have to get the data of employee and put it in the model object
  }
  public employees;
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
    role:'',
    department:''
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
         this.serve.modifyemp(this.model).subscribe();
         alert("Employee has been updated");
         console.log("Updated the employees");
       }
  }

}


