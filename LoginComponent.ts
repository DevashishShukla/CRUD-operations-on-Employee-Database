//loginComponent.ts
import { Component } from '@angular/core';
import { IEmployee } from '../classes/comments';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { IEmployee_two } from '../classes/comments_two';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent{
  rt:Router;
  show:boolean=true;
  constructor(private employeeService:EmployeeService,router:Router) {
    this.rt=router;
  }
  employees=new IEmployee();
  employees_t=new IEmployee();
  employees_to=new IEmployee();
  parameters=new IEmployee_two();
  submit1(t1: string, t2: string) {
    this.employeeService.getEmployees((document.getElementById("t1") as HTMLInputElement).value).subscribe
    (
      data=> 
      {

        console.log(data);
        this.employees=data;
       
    if ((document.getElementById("t1") as HTMLInputElement).value ==this.employees.username && (document.getElementById("t2") as HTMLInputElement).value == this.employees.password) {
      alert(this.employees.Employee_name+"\n"+
      this.employees.Employee_age+"\n"+
      this.employees.username+"\n"+
      this.employees.password);
    }
    else if ((document.getElementById("t1") as HTMLInputElement).value == "" || (document.getElementById("t2") as HTMLInputElement).value == "") {
      alert('Fill the credentials');
    }
     else if (this.employees.username==null && this.employees.password==null)
     {
     alert('Employee does not exists');
     }
     else{
       alert("Invalid Credentials");
     }
    }
    );  
    }
    remove()
    {
      this.parameters.username=(document.getElementById("t1") as HTMLInputElement).value;
      this.parameters.password=(document.getElementById("t2") as HTMLInputElement).value;
      this.employeeService.deleteEmployees(this.parameters).subscribe(
        data=>
        {
        }
        );
        }   
  reset() {
    (document.getElementById("t1") as HTMLInputElement).value = '';
    (document.getElementById("t2") as HTMLInputElement).value = '';
  }
  registers()
  {
    this.rt.navigateByUrl("/Register");
    this.show=false;
  }
   
}
