import { Component } from '@angular/core';
import { Survey } from './Survey';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';


@Component({
    selector: 'survey-component',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.css'],
})

export class SurveyComponent implements OnInit {

    newSurvey: Survey;
    hide_validation: boolean;
    income: number;
    age: number;
    purpose: string;
    source: string;
    ror: number;
    risk_aversion: boolean = false;
    mobile: boolean = false;
    myForm: boolean;
    survey: Object;


    private collection: AngularFirestoreCollection<Survey>;
    surveys: Observable<Survey[]>;


    constructor(private afs: AngularFirestore) {
        this.collection = afs.collection<Survey>('survey');
        this.surveys = this.collection.valueChanges();
    }

    ngOnInit() {
        this.newSurvey = new Survey();
        this.hide_validation = true;
        this.myForm = false;

    }

    addSurvey(survey: Survey) {
        this.collection.add(JSON.parse(JSON.stringify(survey)));
        //since it has to be generic object to be received, one cannot simply use custom object as the argument.
    }



    validate() {
        if (confirm("Are you sure you want to submit the form?")) {
            this.hide_validation = false;

            if (this.newSurvey.$income && this.newSurvey.$age && this.newSurvey.$source && this.newSurvey.$purpose && this.newSurvey.$ror) {
                this.addSurvey(this.newSurvey);
                this.thxMsgAndClearField();
            }
        }

    }

    thxMsgAndClearField(){
        alert("Thank you for your support!");
        this.newSurvey.$age = null;
        this.newSurvey.$income = null;
        this.newSurvey.$purpose = null;
        this.newSurvey.$source = null;
        this.newSurvey.$ror = null;
        this.newSurvey.$mobile = false;
        this.newSurvey.$risk_aversion = false;
        this.hide_validation = true;
    }

}