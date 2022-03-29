import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstudComponent } from './stud/addstud/addstud.component';
import { AddStaffComponent } from './staff/add-staff/add-staff.component';
import { CustomerComponent } from './customer/customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AgePipe } from './filesize.pipe';
import { MyuserComponent } from './myuser/myuser.component';
@NgModule({
  declarations: [
    AppComponent,
    AddstudComponent,
    AddStaffComponent,
    CustomerComponent,
    LoginComponent,
    AgePipe,
    MyuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
