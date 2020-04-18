import { Component, OnInit,ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarComponent } from 'ng-fullcalendar';
import interactionPlugin from '@fullcalendar/interaction';
import { EventInput, renderDateCell } from '@fullcalendar/core';
import {EmpService} from '../emp.service';
import {UpdateService} from '../update.service';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
 
@Component({
  selector: 'app-employeeviewdailyupdate',
  templateUrl: './employeeviewdailyupdate.component.html',
  styleUrls: ['./employeeviewdailyupdate.component.css']
})
export class EmployeeviewdailyupdateComponent implements OnInit {

  constructor(public serve : UpdateService,public serve1 :EmpService,public serve2 :UserService,public router:Router) { }
  @ViewChild('calendar',{static:true}) calendar: CalendarComponent;

  calendarPlugins = [dayGridPlugin,interactionPlugin];
  public employeeupdates;
 
  ngOnInit() 
  {
    //get the updates of a particular employee by passing employee code
    this.serve.datefordetail='';
    this.serve.getupdatesbyemployeecode(this.serve1.employeecode).subscribe(data => {this.employeeupdates = data;console.log(this.employeeupdates);this.display()});
    
  }

  calendarEvents: EventInput[] =[{ title:"", date: "" , backgroundColor: 'red'}];
  handledateclick(arg) 
  { 
    alert(arg.date);
  }

  handleeventclick(arg)
  {
    console.log(arg.event.start);
    this.serve.datefordetail=arg.event.start;
    console.log('display the update');
    this.router.navigate(['/employee/employeedailyupdatedetail']);
  }




  display()
  {
    //this.employeeupdates.forEach(x=>{})

    this.calendarEvents =[{ title:"", date: "" , backgroundColor: 'red'}];
    
    this.employeeupdates.forEach(x => 
    {
      //console.log(x);
      if(x.date==x.today)
      {
      this.calendarEvents = this.calendarEvents.concat
      ({ title:'Submitted', date: x.date, backgroundColor:'green'});
      }
      else if(x.date!=x.today)
      {
      this.calendarEvents = this.calendarEvents.concat
      ({ title:"Late Submission", date: x.date, backgroundColor:'yellow'  });
      }
    })

    // s=this.serve2.detail;
    // console.log(s);
    s={doj:'2019-06-20'};
    var s;
    var count:number ;
    var currentDate = new Date(s.doj)
    var yo = new Date(s.doj);
    var eventdate = new Date(yo.setDate(yo.getDate()-1));
    var endDate = new Date();
    while(currentDate <= endDate) {
    count=1;
    this.employeeupdates.forEach(x => {
    var cmpdate= new Date(x.date);
    if(currentDate.toDateString()==cmpdate.toDateString()){count=0;return;}
    });
    if(count){
    this.calendarEvents = this.calendarEvents.concat
    ( 
    { title:'No Submission', date:eventdate, backgroundColor:'red'  }
    );}
    currentDate = new Date(currentDate.setDate(currentDate.getDate()+1));
    eventdate = new Date (eventdate.setDate(eventdate.getDate()+1));
    }
    







  }

 





}
