import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestInterceptorInterceptor } from './interceptor/test-interceptor.interceptor';

import { ToastrService } from 'ngx-toastr';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import {MatProgressSpinnerModule  } from '@angular/material/progress-spinner';
import { ApiService } from './api.service';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    MatProgressBarModule,
    MatProgressSpinnerModule
    
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS , useClass : TestInterceptorInterceptor , multi : true},
    ApiService
   
  ],
  
  
  bootstrap: [AppComponent]
})
export class AppModule { }
