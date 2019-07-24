import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/LoginComponent";
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule }    from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { WelcomeComponent } from "./welcome/welcome.component";
import { WelcomeTwoComponent } from './welcome-two/welcome-two.component';
import { WelcomeThreeComponent } from './welcome-three/welcome-three.component';
const appRoutes:Routes=[{path:'WelcomeThree',component:WelcomeThreeComponent},
                        {path:'WelcomeTwo',component:WelcomeTwoComponent},
                        {path:'Welcome',component:WelcomeComponent},
                        {path:'Login',component:LoginComponent},
                        {path:'Register',component:RegisterComponent}];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    WelcomeTwoComponent,
    WelcomeThreeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
