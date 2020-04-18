import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { CempComponent } from './cemp/cemp.component';
import { VempComponent } from './vemp/vemp.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EditdetailComponent } from './editdetail/editdetail.component';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { CreatedepartmentComponent } from './createdepartment/createdepartment.component';
import { ViewdepartmentComponent } from './viewdepartment/viewdepartment.component';
import { ViewemployeedetailComponent } from './viewemployeedetail/viewemployeedetail.component';
import { ModifyemployeedetailComponent } from './modifyemployeedetail/modifyemployeedetail.component';
import { EmployeeviewdailyupdateComponent } from './employeeviewdailyupdate/employeeviewdailyupdate.component';
import { EmployeedailyupdatedetailComponent } from './employeedailyupdatedetail/employeedailyupdatedetail.component';
import { AdmindailyupdatedetailComponent } from './admindailyupdatedetail/admindailyupdatedetail.component';


const routes: Routes = [
{path: '', redirectTo: 'login', pathMatch: 'full'},
{path:'login', component: LoginComponent},
{path:'admin', 
component:AdminComponent, 
children:[
{path: '', redirectTo: 'dashboard', pathMatch:'full'},
{path:'createemployee',component:CempComponent},
{path:'viewemployee', component: VempComponent},
{path:'modifyemployeedetail', component: ModifyemployeedetailComponent},
{path:'viewemployeedetail', component: ViewemployeedetailComponent},
{path: 'dashboard', component: AdmindashboardComponent},
{path:'createdepartment', component: CreatedepartmentComponent},
{path:'viewdepartment', component:ViewdepartmentComponent},
{path:'admindailyupdatedetail',component:AdmindailyupdatedetailComponent}

]},

{path:'employee', component:EmployeeComponent,
children:[
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path:'edit',component: EditdetailComponent},
  {path : 'dashboard', component:EmpdashboardComponent},
  {path:'viewdailyupdate',component:EmployeeviewdailyupdateComponent},
  {path:'employeedailyupdatedetail', component:EmployeedailyupdatedetailComponent}

]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const R= [LoginComponent,AdmindailyupdatedetailComponent,EmployeedailyupdatedetailComponent,EmployeeviewdailyupdateComponent,AdminComponent,EmployeeComponent,CempComponent,VempComponent,AdmindashboardComponent,EditdetailComponent,EmpdashboardComponent,CreatedepartmentComponent,ViewdepartmentComponent,ViewemployeedetailComponent,ModifyemployeedetailComponent]





