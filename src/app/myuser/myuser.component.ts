import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myuser',
  templateUrl: './myuser.component.html',
  styleUrls: ['./myuser.component.css']
})
export class MyuserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   wish="good afternoon";
   birthday=new Date(1994,4,23);
  //  mydate:Date=new Date();
}
