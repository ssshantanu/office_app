import { Component, OnInit } from '@angular/core';
import {EmpService} from '../emp.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viewemployeedetail',
  templateUrl: './viewemployeedetail.component.html',
  styleUrls: ['./viewemployeedetail.component.css']
})
export class ViewemployeedetailComponent implements OnInit {

  constructor(public serve : EmpService, public route :ActivatedRoute) { }
  public arr ;
  public employeecode;

  ngOnInit() 
  {
    //this.employeecode=this.route.snapshot.paramMap.get('employeecode');
    //this.serve.getempbyemployeecode(this.employeecode).subscribe(data => {this.arr = data},error=>{});
    this.arr=this.serve.employee;
  }

}

  