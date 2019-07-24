import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../classes/comments';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent  {
  rt:Router;
  show: boolean = true;
  show_one:boolean=true;
  constructor(private employeeService:EmployeeService,router:Router) { 
    this.rt=router;
  }
  employees_two=new IEmployee();
  posts : IEmployee;
  submit2(r1:string,r2:string,r3:string,r4:string)
  {
    if((document.getElementById("r1") as HTMLInputElement).value!='' &&
    (document.getElementById("r2") as HTMLInputElement).value!='' &&
    (document.getElementById("r3") as HTMLInputElement).value!='' &&
    (document.getElementById("r4") as HTMLInputElement).value!='')
    {
      this.employees_two.Employee_name=(document.getElementById("r1") as HTMLInputElement).value;
      this.employees_two.username=(document.getElementById("r3") as HTMLInputElement).value;
      this.employees_two.password=(document.getElementById("r4") as HTMLInputElement).value;
      this.employees_two.Employee_age=parseInt((document.getElementById("r2") as HTMLInputElement).value);
      this.employeeService.postEmployees(this.employees_two).subscribe
      (
        data=>
        {
            this.posts=data;
        }
      );
      alert("Entry Submitted");
      this.rt.navigateByUrl('/Welcome');
      this.show = false;
    }
    else{
      alert("Enter all details");
    }
  }
    
  reset2(r1:string,r2:string,r3:string,r4:string)
  {
    (document.getElementById("r1") as HTMLInputElement).value='';
    (document.getElementById("r2") as HTMLInputElement).value='';
    (document.getElementById("r3") as HTMLInputElement).value='';
    (document.getElementById("r4") as HTMLInputElement).value='';
}
logins()
{
  this.rt.navigateByUrl('/Login');
  this.show_one=false;
}
ngOnInit(){ }

}
