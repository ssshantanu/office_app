import { Component, OnInit,ViewChild } from '@angular/core';
import {UpdateService} from '../update.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarComponent } from 'ng-fullcalendar';
import interactionPlugin from '@fullcalendar/interaction';
import { EventInput } from '@fullcalendar/core';
import {EmpService} from '../emp.service';
import {DepartmentService} from '../department.service';
import {Router} from '@angular/router';
  

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(public serve : UpdateService,public serve1 :EmpService,public departmentservice:DepartmentService,public router :Router) { }
  @ViewChild('calendar',{static:true}) calendar: CalendarComponent;

ngOnInit() 
{
 this.departmentservice.getdepartment().subscribe(res=>{this.departments=res;},error=>{});    
 this.serve1.getemp().subscribe(data1=>{this.employee=data1;});
 this.serve.getupdates().subscribe(data => {this.employeeupdates = data;this.display("","")});  
}
calendarPlugins = [dayGridPlugin,interactionPlugin];
public departments;
public employeeupdates;
public employee;
public arrsearch = [];
public dept;
public code;

calendarEvents: EventInput[] =[{ title:"", date: "" , backgroundColor: 'red'}];

handledateclick(arg) 
{ 
 alert(arg.date);
}


handleeventclick(arg)
{ // here we have to create a new page and redirect there then in that page we have to display the information
 this.serve.datefordetail =arg.event.start;
 this.serve.employeecodesearch=this.code;
 this.serve.departmentsearch=this.dept
 this.router.navigate(['/admin/admindailyupdatedetail']) 
}












display(employeecode:String,department:String)
{
  this.code =employeecode;
  this.dept=department;
    console.log(employeecode,department);
    this.calendarEvents =[{ title:"", date: "" , backgroundColor: 'red'}];
    var filteredemployeeupdate = [];
    var filteredemployee=[];
    var count = 0;
    var count1=0;


    this.employeeupdates.forEach(x => 
    {
      if(employeecode==x.employeecode||department==x.department)
      {
       if(x.date==x.today)
       {
        this.calendarEvents = this.calendarEvents.concat
        ( 
        { title:'Submitted', date: x.date, backgroundColor:'green'}
        );
       }
       else if(x.date!=x.today)
       {
        this.calendarEvents = this.calendarEvents.concat
        ( 
        { title: 'Late Submission', date: x.date, backgroundColor:'yellow'  }
        );
       }
      }


      if(department==x.department)
      {
       filteredemployeeupdate.push(x[2]);
      }
    });
    
    // this.employee.forEach(x=>{if(department==x.department){filteredemployee.push(x[3]);}})
    // console.log(filteredemployee);
    // console.log(filteredemployeeupdate);
    // filteredemployee.forEach(x=>
    //   {

    //     filteredemployeeupdate.forEach(y => 
    //       {count1=0;
    //         if(x.employeecode==y.employeecode)
    //         {


    //           if(count==0)
    //           {
    //            if(y.date==y.today)
    //            {
    //            this.calendarEvents = this.calendarEvents.concat({ title:'Submitted', date: y.date, backgroundColor:'green'});
    //            }
    //           else if(y.date!=y.today)
    //           {
    //           this.calendarEvents = this.calendarEvents.concat({ title: 'Late Submission', date: y.date, backgroundColor:'yellow'});
    //           }
              
    //           }

           
    //         filteredemployeeupdate.forEach(arr1=>{if(arr1.date==y.date){count1++;}})
    //         this.calendarEvents.forEach(arr=>
    //           {
    //             if(arr.date==y.date)
    //             {if(filteredemployee.length==count1){
    //               if(arr.backgroundColor=='green')
    //               {if(y.date!=y.today){arr.backgroundColor='yellow';arr.title='Late Submission'}}
    //               if(arr.backgroundColor=='yellow'){arr.backgroundColor='yellow';arr.title='Late Submission'}
    //             }
    //             else {arr.backgroundColor='red',arr.title='No Submission'}
    //             }
                
    //           })
            
    //         }
            
    //       });
    //       count++;
    //   });

this.employee.forEach(x => {
  if(x.employeecode==employeecode){s=x.doj;}
  if(x.department==department){s=x.doj}
});
var s;
    var count:number ;
    var currentDate = new Date(s)
    var yo = new Date(s);
    var eventdate = new Date(yo.setDate(yo.getDate()-1));
    var endDate = new Date();
    while(currentDate <= endDate) {
    count=1;
    this.employeeupdates.forEach(x => {
    var cmpdate= new Date(x.date);
    if(x.employeecode==employeecode&&currentDate.toDateString()==cmpdate.toDateString()){count=0;return;}
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





