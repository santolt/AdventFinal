import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LoginLayoutModule } from './layouts/login-layout/login-layout.module';
import { MainLayoutModule } from './layouts/main-layout/main-layout.module';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorPipe } from './core/pipes/paginator.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PaginatorPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginLayoutModule,
    MainLayoutModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
