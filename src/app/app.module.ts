import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { PersonsDetailsComponent } from './persons-details/persons-details.component';
import {PersonsServiceService} from './persons-service.service';
import { asRotas } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    PersonsListComponent,
    PersonsDetailsComponent

  ],
  imports: [
    BrowserModule,
    asRotas
  ],
  providers: [PersonsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
