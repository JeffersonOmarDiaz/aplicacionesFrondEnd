import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//importamos el modulo http
import { HttpClientModule }from '@angular/common/http';

//importaciones para fiorebase
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';

import {FirestoreSettingsToken, AngularFirestore} from '@angular/fire/firestore';
import {ReactiveFormsModule} from '@angular/forms';
import { AutoComponent } from './components/auto/auto.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase)
    //ReactiveFormsModule
  ],
  providers: [
    AngularFirestore,
    {provide:FirestoreSettingsToken, useValue:{}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
