import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import {DepartmentService} from '../department.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createdepartment',
  templateUrl: './createdepartment.component.html',
  styleUrls: ['./createdepartment.component.css']
})
export class CreatedepartmentComponent implements OnInit {

  constructor(public http:HttpClient, public serve : DepartmentService, public router: Router) { }
 
  ngOnInit() 
  {
    if(this.serve.obj!=null)
    {
      this.mod();
    }
  }

  public model ={
    departmentcode : '',
    departmentname: ''
  };
  public flag :boolean=true;
  
  validate()
  {
    if(this.model.departmentname==""||this.model.departmentcode==null)
    {
   	alert("Please fill all the fields");
    }
    else
    {
      if(this.flag)
      {
      this.serve.makedepartment(this.model).subscribe(res=>
        {
          console.log("department created");
          this.router.navigate(['/admin/viewdepartment'])
        },
        error=>{}
        );
      }
      else
      {
        this.serve.modifydepartment(this.model).subscribe(res=>
          {
            console.log("department updated");
            this.flag=true;
            this.router.navigate(['/admin/viewdepartment'])
          },
          error=>{}
          );
      }

    }
          
  }


  mod()
  {
    this.model= this.serve.obj;
    console.log(this.model);
    this.serve.obj=null;
    this.flag = false;
  }
  

}

