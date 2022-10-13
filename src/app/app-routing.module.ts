import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { HelloWorldNgifComponent } from './hello-world-ngif/hello-world-ngif.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "signup", component: RegisterComponent},
  {path: "elist", component: EmpListComponent},
  {path: "hello", component: HelloWorldNgifComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
