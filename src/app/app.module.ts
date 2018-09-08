import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatSelectModule, MatOptionModule} from '@angular/material'

import { AppComponent } from './app.component';
import { BookinHomeComponent } from './bookin-home/bookin-home.component';

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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
