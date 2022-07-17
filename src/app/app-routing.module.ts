import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path:'home',component: HomeComponent,canActivate:[AuthGuard]}, // cannot route to home by typing in the url ---> Blocked
  {path:'statistics',component: StatisticsComponent,canActivate:[AuthGuard]}, // cannot route to statistics by typing in the url ---> Blocked
  {path:'',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
