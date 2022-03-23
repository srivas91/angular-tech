import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { AddStaffComponent } from './staff/add-staff/add-staff.component';
import { AddstudComponent } from './stud/addstud/addstud.component';

const routes: Routes = [
  // {path:'',component:AddstudComponent},
  // {path:'',component:AddStaffComponent},
  // {path:'addcust',component:CustomerComponent}
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
