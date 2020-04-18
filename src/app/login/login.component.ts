import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Employeet } from '../empt'; 
import {EmpService} from '../emp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, public serve: UserService, public serve1 : EmpService) { }
  public empdata;
  ngOnInit() { this.serve1.getemp().subscribe(data => this.empdata = data)}
  public emp: Employeet;
  public role: String;
  public login : boolean=false;
  public error: boolean = false;
  public model = { username: '', password: '' };
  validate() {
    console.log(this.model);
    if (this.model.username == '') { this.error = true; }
    else if (this.model.password == '') { this.error = true; }
    //logic for checking id pass in backend
    // else {
    //   this.serve.match(this.model).subscribe(res => { 
    //     this.emp = res[3];
    //     this.serve.detail = this.emp;
    //     this.serve1.employeecode=res[3].employeecode; 
    //     console.log(this.emp);
    //     console.log(res);
    //     console.log(res.role);
    for (let i of this.empdata) {
      if(i.username==this.model.username && i.password==this.model.password)
      {this.login=true;this.role=i.role;}
    }

        if (this.login) //res != null
        {
          if (this.role =="admin") {    //res[3].role == 'admin'
            this.router.navigate(['/admin']);
          }
          else if (this.role=="employee") { //res[3].role == 'employee'
            this.router.navigate(['/employee']);
          }
          else 
          {
            this.error = true;
          }
        }
        else
        {
          this.error = true;
        }
      }//,
      // error =>{
      //   console.log(error);
      //   this.error=true;
      // });
    }
 // }

//}

