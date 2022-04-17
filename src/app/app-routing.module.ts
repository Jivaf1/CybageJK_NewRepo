import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowScheduledFlightComponent } from './component/show-scheduled-flight/show-scheduled-flight.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';


const routes: Routes = [
     {path: 'signIn' , component:SignInComponent},
     {path: 'signUp' , component: SignUpComponent},
     {path: 'showScheduledFlight', component:ShowScheduledFlightComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
