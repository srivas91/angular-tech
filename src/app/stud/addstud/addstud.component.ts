import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstud',
  templateUrl: './addstud.component.html',
  styleUrls: ['./addstud.component.css']
})
export class AddstudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   maximum=Math.max(25,10);
   stuname='karthik';
   today=new Date();
   username="mano123";
   mycolor="";

   show=true;
  hidefun(username:string){
     this.show=false;
  }
}
