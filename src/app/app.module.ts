import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InterestCalculatorComponent } from './interestcalculator.component';
import { LineChartComponent} from './linechart.component';
import { PieChartComponent } from './piechart.component';
import { AppRoutingModule } from './/app-routing.module';
import { SurveyComponent } from './survey.component';
import { AnalyticsComponent } from './analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { SaveSurveyService } from './save-survey.service';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';




@NgModule({
  declarations: [
    AppComponent,
    InterestCalculatorComponent,
    LineChartComponent,
    PieChartComponent,
    SurveyComponent,
    AnalyticsComponent,
    DashboardComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    //initialize firebase configurations
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
