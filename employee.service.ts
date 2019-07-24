//EmployeeService.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { IEmployee } from './classes/comments'; 
import { IEmployee_two } from './classes/comments_two';

@Injectable()
export class EmployeeService {
  constructor(private httpClient:HttpClient) {} 
    getEmployees(username:string):Observable<any> {
     let params1=new HttpParams().set('username',username);
     return this.httpClient.get("http://localhost:58909/api/employees",{params:params1});
    }
    postEmployees(emp:IEmployee):Observable<any>{
      console.log(emp.password);
     return(this.httpClient.post("http://localhost:58909/api/employees",emp));
    }
    putEmployees(empro:IEmployee)
    {
      return this.httpClient.put("http://localhost:58909/api/employees",empro);
    }
    deleteEmployees(emp:IEmployee_two)
    {
      let params3=new HttpParams().set('username',emp.username).set('password',emp.password);
      console.log(params3);
      return this.httpClient.delete("http://localhost:58909/api/employees",{params:params3});
    }
    }   

