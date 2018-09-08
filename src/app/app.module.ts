import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatSelectModule, MatOptionModule} from '@angular/material'

import { AppComponent } from './app.component';
import { BookinHomeComponent } from './bookin-home/bookin-home.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BookinHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    AngularFireModule.initializeApp(environment.firebase, 'dreamcasterdb'),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
