import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// GURUNG
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
    declarations: [
      AppComponent,
      HeroesComponent,
      HeroDetailComponent,
      MessagesComponent,
      DashboardComponent,
      HeroSearchComponent,
    ],
    imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatButtonModule,

      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, {dataEncapsulation:
          false }
      )
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
