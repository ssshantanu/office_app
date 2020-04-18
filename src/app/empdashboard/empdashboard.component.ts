import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../update.service';
import {Updates} from '../updates';
import {UserService} from '../user.service';
import {EmpService} from '../emp.service'; 
import {Router} from '@angular/router'; 
@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.css']
})
export class EmpdashboardComponent implements OnInit {

  constructor(public serve : UpdateService,public serve1:UserService, public serve2 :EmpService,public router:Router ) { }
  public emp;
  public filteredemp =[];
  public no = new Date();
  public content : string;
  public error : boolean = false;
  public detail;
  public flag:boolean=false;

  ngOnInit() 
  {
    //this.detail=this.serve1.detail;
    //this.serve2.getemp().subscribe(res=>{
    //this.emp=res;
    //this.m();
    //},error=>{});  
  }

  update(){this.flag=true;this.validate();}


validate()
{
if(this.content==undefined)
  {
   this.error=true;
  }
  else
  {
   var currentdate = new Date();
   var date= new Date(this.no);
   var lastdate = new Date();
   lastdate.setDate(lastdate.getDate() - 2);
   var c = currentdate.getTime();
   var l = lastdate.getTime();
   var d = date.getTime();
   date.setHours(currentdate.getHours());
   date.setMinutes(currentdate.getMinutes());
   date.setSeconds(currentdate.getSeconds());
   date.setMilliseconds(currentdate.getMilliseconds());
   var model = 
   {
     //employeecode:this.detail.employeecode , 
     content:this.content, 
     date: date ,
     today:new Date(),
     //department:this.detail.department
   };
 
   if(d<c && l<d)
   {
     if(this.flag)
     {
       this.serve.update(model).subscribe(res=>console.log());
       this.flag=false;
       alert('Daily update is Updated');
     }
     else
     {
      this.serve.makeupdate(model).subscribe(res => console.log);
     
      alert("Daily update is submitted");
      this.router.navigate(['/employee/dashboard']);

     }
   
   }
   else
   {
    this.error=true;
    console.log("error");
   }
 }
}

m()
{
  this.emp.forEach(x => {
    if(this.detail.department==x[3].department)
    {
      this.filteredemp.push(x[3]);
    }
    
  });
}

}


