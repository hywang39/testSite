import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Survey } from './Survey';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'analytics-component',
    templateUrl:'./analytics.component.html',
})

export class AnalyticsComponent {
    private collection: AngularFirestoreCollection<Survey>;
    private surveyDoc: any;
    surveys: Observable<Survey[]>;
    survey: Observable<Survey>;


    constructor(private afs: AngularFirestore) {
        this.collection = afs.collection<Survey>('survey');
        // this.surveyDoc = afs.doc<Survey>('survey').snapshotChanges();
        this.surveys = this.collection.valueChanges();

    }

    // deleteBadData(survey:Survey){
    //     if (confirm("Are you sure you want to delete this entry?")) {
    //         this.surveyDoc.delete();
    //     }
    // }
}