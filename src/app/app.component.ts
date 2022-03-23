import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stuid=1001;
  name='varshini';
  course='Python';
  user="abishek456";
  count=0;
  title='tech-app';
  incCount():void
  {
    this.count=this.count+1;
  }
  decCount():void
  {
    
    if(this.count<=0)
    {
      alert('cannot decrement')
    }
    else
    {
      this.count=this.count-1;
    }
  }
}
