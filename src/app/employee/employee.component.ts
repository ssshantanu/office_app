import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Employeet} from '../empt';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public serve:UserService) { }

  ngOnInit() {this.detail=this.serve.detail;
  }
  public detail : Employeet;

}



