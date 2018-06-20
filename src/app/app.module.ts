import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DemoPage } from '../pages/demopage/demopage';
import { DisplayData } from '../pages/displaydata/displaydata';
import {MatCheckboxModule} from '@angular/material/checkbox';


import { RouterModule, Routes}  from '@angular/router';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';

import { HttpService } from '../service/http.service';

import { Http, Headers } from '@angular/http';
import {MatCardModule} from '@angular/material/card';



const appRoutes: Routes = [
  { path : '',component : DemoPage},
  { path : 'displaydata/:id',component : DisplayData},

];

const baseURL = 'https://jsonplaceholder.typicode.com/';



@NgModule({
  declarations: [
    AppComponent,
    DemoPage,
    DisplayData
  ],

  imports: [
    NoopAnimationsModule,
    MatCheckboxModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
        HttpModule,
MatCardModule
  ],

    exports: [RouterModule],
  providers: [HttpService, { provide: 'baseURL', useValue: baseURL }],
  bootstrap: [AppComponent]
})
export class AppModule { }
