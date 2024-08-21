import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserJourneyComponent } from './user-journey/user-journey.component';
import { HomeComponent } from './home/home.component';
import { BusinessUserComponent } from './business-user/business-user.component';
import { OperationalUserComponent } from './operational-user/operational-user.component';
import { TechnicalUserComponent } from './technical-user/technical-user.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user-journey', component: UserJourneyComponent },
  { path: 'home-page', component: HomeComponent },
  { path: 'business-mode', component: BusinessUserComponent },
  { path: 'operations-mode', component: OperationalUserComponent },
  { path: 'technical-mode', component: TechnicalUserComponent },
  { path: 'demo', component: DemoComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
