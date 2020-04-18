import { Component, OnInit } from '@angular/core';
import {UpdateService} from '../update.service';





@Component({
  selector: 'app-admindailyupdatedetail',
  templateUrl: './admindailyupdatedetail.component.html',
  styleUrls: ['./admindailyupdatedetail.component.css']
})
export class AdmindailyupdatedetailComponent implements OnInit {

  constructor(public serve :UpdateService) { }
  public employeecode;
  public departmentcode;
  public updates;
  public updateofdate;
  public filter =[]; 

  ngOnInit() 
  {
    this.updateofdate=this.serve.datefordetail;
    this.departmentcode=this.serve.departmentsearch;
    this.employeecode=this.serve.employeecodesearch;
    //this.serve.getupdates().subscribe(res=>{this.updates=res;this.d()},error=>{})
    this.serve.getupdatesbyemployeecode(this.serve.employeecodesearch).subscribe(res=>{this.updates=res;this.d()},error=>{})
   // this.serve.getupdatesbydepartmentcode(this.departmentcode).subscribe(res=>{this.updates=res;this.d()},error=>{})

  }
  d()
  {
    console.log(this.departmentcode)
    var updatedate =new Date(this.updateofdate);
    this.updates.forEach(x=>
      {
        var date =new Date(x.date);
        if(this.employeecode==x.employeecode||this.departmentcode==x.department)
        {
        if(date.toLocaleDateString()==updatedate.toLocaleDateString())
        {
          this.filter.push(x);

        }}
      })
      console.log(this.filter);


  }

  // this.employeeupdates.forEach(x =>
  //   {
  //    var date = new Date(x.date)
  //    console.log(date.getDate())
  //     if(arg.event.title==x.employeecode && arg.event.start.getDate()==date.getDate())
  //     {
  //       console.log("hello");
  //       window.open('','Updates of Employees').document.write
  //       (
  //        "Employee Code : "+x.employeecode+"<br>"+
  //        "Date of work : "+x.date+"<br>"+
  //        "Date of submission : "+x.today+"<br>"+
  //        "Department : "+x.department+"<br>"+
  //        "Content :"+x.content+"<br><br><br><br>"
  //       );
  //     }
  //   });


}
