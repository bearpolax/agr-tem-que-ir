import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Platform, ToastController, List, App, Config } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { HttpModule } from '@angular/http'
import firebaseConfig from './firebase'
import { UserService } from './user.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { AnimeComponent } from './anime/anime.component';
import { IonicStorageModule } from '@ionic/storage'
import { AdicionarAnimeComponent } from './adicionar-anime/adicionar-anime.component';
import { FormsModule } from '@angular/forms';
import { SelectSearchableModule } from 'ionic-select-searchable';



const firebaseUiAuthConfig: firebaseui.auth.Config = {
};





@NgModule({
  declarations: [AppComponent,
	AnimeComponent,
	DetalhesComponent,
AdicionarAnimeComponent],
  entryComponents: [],
  imports: [
	  BrowserModule, 
	  FormsModule,
	  IonicModule.forRoot(), 
	  AppRoutingModule,
	  AngularFireModule.initializeApp(firebaseConfig),
	  AngularFireAuthModule,
	  AngularFirestoreModule,
	  IonicStorageModule.forRoot(),
	   FirebaseUIModule.forRoot(firebaseUiAuthConfig),
	   HttpClientModule,
	   SelectSearchableModule
	],
  providers: [  
    StatusBar,
    SplashScreen,
	{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
	UserService,
	AuthService,
	MenuController,
	NavParams,
	Keyboard,
	Platform,
	ToastController,
	List,
	App,
	Config
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}