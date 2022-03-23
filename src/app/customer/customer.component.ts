import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }
   status=true;
  ngOnInit(): void {
  }
    
    
   onSubmit(userForm: any)
   {
      let user=userForm.value.username;
      console.log(user);
     console.log(userForm.value);
   } 
}
