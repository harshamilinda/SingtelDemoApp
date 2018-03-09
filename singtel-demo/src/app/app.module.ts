import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProgressLineComponent } from './components/progress-line/progress-line.component';
import { ProgressInfoService } from '../app/services/progress-info.service';

import {
  FormsModule
} from '@angular/forms';
import {
  HttpModule
} from '@angular/http';

import * as _ from 'underscore';

@NgModule({
  declarations: [
    AppComponent,
    ProgressLineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProgressInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
