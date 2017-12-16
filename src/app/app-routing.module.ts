import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyComponent } from './survey.component'; 
import { InterestCalculatorComponent } from './interestcalculator.component';
import { HomeComponent } from './home.component';
import { AnalyticsComponent } from './analytics.component';

const   routes: Routes = [
  {path: 'survey', component: SurveyComponent},
  {path: 'financial-calculator', component: InterestCalculatorComponent},
  {path: '', component: HomeComponent},
  {path: 'analytics', component: AnalyticsComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}