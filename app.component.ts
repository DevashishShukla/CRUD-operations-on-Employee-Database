import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  rt:Router;
  show: boolean = true;
  show_one: boolean;
  constructor(router:Router)
  {
  this.rt=router;
  }
  title = 'sample';
  Login(){
  this.rt.navigateByUrl('/Login');
  this.show = false;
  }
  Register()
  {
  this.rt.navigateByUrl('/Register');
  this.show=false;
  }
  update()
  {
  this.rt.navigateByUrl('/WelcomeThree');
  this.show_one=false;
      }
}