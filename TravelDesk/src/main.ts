import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideHttpClient,withFetch } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';


import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { provideRouter, ROUTES } from '@angular/router';


/*platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));*/

 /* bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(withFetch()), // Configure the HttpClient here// Add the rest of the providers here
    ],
  }); */
 
platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));


  
