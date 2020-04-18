import { Component, OnInit } from '@angular/core';
import {EmpService} from '../emp.service';
import {UpdateService} from '../update.service';

@Component({
  selector: 'app-employeedailyupdatedetail',
  templateUrl: './employeedailyupdatedetail.component.html',
  styleUrls: ['./employeedailyupdatedetail.component.css']
})
export class EmployeedailyupdatedetailComponent implements OnInit {

  constructor(public serve1 :EmpService,public serve : UpdateService) { }

  public employeecode;
  public filtered =[]
  public employeeupdates;
  public date;
  ngOnInit() 
  {
    this.date=this.serve.datefordetail
    this.employeecode=this.serve1.employeecode 
    this.serve.getupdatesbyemployeecode(this.serve1.employeecode).subscribe(data => {this.employeeupdates = data;this.filter()});
  }
filter()
{
  var date1=new Date(this.date)
  this.employeeupdates.forEach(x => {
    var datee= new Date(x.date);
   //it will get updates by employee code and then it will display th detail by date you have selected
    if(date1.toLocaleDateString()==datee.toLocaleDateString())
    {
      this.filtered.push(x);
      console.log(this.filtered);
    }
  });
}

}
