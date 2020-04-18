import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'
import { AppRoutingModule , R } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user.service';
import {EmpService} from './emp.service';
import { NgxEditorModule } from 'ngx-editor';
import {UpdateService} from './update.service';
import { FullCalendarModule } from '@fullcalendar/angular';
import {DepartmentService} from './department.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    R
    ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    FullCalendarModule,
    NgxEditorModule
  ],
  providers: [UserService,EmpService,UpdateService,DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }



