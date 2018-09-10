import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatSelectModule, MatOptionModule, MatAutocompleteModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BookinHomeComponent } from './bookin-home/bookin-home.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { SearchResultComponent } from './search-result/search-result.component';
import { AppService } from './app.service';


const appRoutes: Routes = [
  { path: 'bookin-home', component: BookinHomeComponent },
  { path: 'search-result',component: SearchResultComponent },
  { path: '',
    redirectTo: 'bookin-home',
    pathMatch: 'full'
  },
  { path: '**', component: BookinHomeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    BookinHomeComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    AngularFireModule.initializeApp(environment.firebase, 'dreamcasterdb'),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
