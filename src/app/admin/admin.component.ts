import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import {Employeet} from '../empt';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router,public serve:UserService) { }

  ngOnInit() {this.detail=this.serve.detail;
  }
  public detail : Employeet;

}

