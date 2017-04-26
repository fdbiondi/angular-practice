import { UserService } from './providers/user/user.service';
import { AuthGuard } from './guard/auth_guard.service';
import { AppRoutingModule } from './routes/app-routing.module';
import { Auth } from './providers/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app/app.component';

import { components } from './components/index';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { HttpModule, XHRBackend } from '@angular/http';

import { Logger } from "angular2-logger/core"; // ADD THIS

import { provideAuth } from 'angular2-jwt';

import { InterceptorXHRBackend } from './providers/interceptor/interceptor.service';

import {Ng2PaginationModule} from 'ng2-pagination'; 

@NgModule({
  imports: [ 
    BrowserModule, 
    HttpModule, 
    AppRoutingModule, 
    FormsModule,
    Ng2PaginationModule
  ],
  declarations: [ 
    AppComponent, 
    components 
  ],
  bootstrap: [ AppComponent ],
  providers: [ 
    {provide: XHRBackend, useClass: InterceptorXHRBackend},
    AUTH_PROVIDERS, 
    Auth, 
    AuthGuard,
    Logger, 
    UserService,
    provideAuth({
      tokenGetter: () => {
        return localStorage.getItem('id_token')
      }
    }),
  ]
})
export class AppModule { }
