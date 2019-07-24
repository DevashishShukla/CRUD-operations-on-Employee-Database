import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../classes/comments';
import { from } from 'rxjs';
import { post } from 'selenium-webdriver/http';
@Component({
  selector: 'app-welcome-three',
  templateUrl: './welcome-three.component.html',
  styleUrls: ['./welcome-three.component.less']
})
export class WelcomeThreeComponent implements OnInit {
postu=new IEmployee();
emp_t=new IEmployee();
  constructor(private httpServe:EmployeeService) { }
  Proceed()
  {
      this.httpServe.getEmployees((document.getElementById("tt3") as HTMLInputElement).value).subscribe(
      data=>
      {
      this.emp_t=data; 
      if(this.emp_t.username==(document.getElementById("tt3") as HTMLInputElement).value && this.emp_t.password==(document.getElementById("tt4") as HTMLInputElement).value)
      {
        if((document.getElementById("tt1") as HTMLInputElement).value=="")
        {
          this.postu.Employee_name=this.emp_t.Employee_name;
        }
        else
        {
          this.postu.Employee_name=(document.getElementById("tt1") as HTMLInputElement).value;
        }
        if((document.getElementById("tt2") as HTMLInputElement).value=="")
        {
          this.postu.Employee_age=this.emp_t.Employee_age;
        }
        else
        {
          this.postu.Employee_age=parseInt((document.getElementById("tt2") as HTMLInputElement).value);
        }
        if((document.getElementById("tt3") as HTMLInputElement).value=="")
         {
            this.postu.username=this.emp_t.username;
         }
         else
         {
           this.postu.username=(document.getElementById("tt3") as HTMLInputElement).value;
         }
         if((document.getElementById("tt5") as HTMLInputElement).value=="")
         {
           this.postu.password=this.emp_t.password;
         }
         else
         {
           this.postu.password=(document.getElementById("tt5") as HTMLInputElement).value;
         }
          alert("details updated");
          console.log(this.postu);
          this.httpServe.putEmployees(this.postu).subscribe(
          data=>
          {

          }
        );
      }
      else if((document.getElementById("tt4") as HTMLInputElement).value!=this.emp_t.password)
      {
        alert("Invalid details");
      }
      else if((document.getElementById("tt4") as HTMLInputElement).value==null)
      {
        alert("Enter the previous password");
      }
      }  
      );
  }
  ngOnInit() {
  }
}
