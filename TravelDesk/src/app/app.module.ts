import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RequestFormComponent } from './request-form/request-form.component';

import { AdminPageComponent } from './admin-page/admin-page.component';

import { HttpClientModule } from '@angular/common/http';
import { ManagerComponent } from './manager/manager.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
 
  declarations: [
    
    LoginFormComponent,
    RequestFormComponent,
    AdminPageComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    

  
  
  
   
  ],
  providers: [
    provideClientHydration()
    
  
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
