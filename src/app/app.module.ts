import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { employeeservice } from './employee/employee.service';

@NgModule({
declarations: [
AppComponent,
EmployeeComponent,

],
imports: [
BrowserModule,
AppRoutingModule
],
providers: [employeeservice
],
bootstrap: [AppComponent]
})
export class AppModule { }