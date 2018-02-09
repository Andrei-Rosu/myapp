import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MostPage} from "../pages/most/most";
import {CategoryPage} from "../pages/category/category";
import {AddPage} from "../pages/add/add";
import {WeirdPage} from "../pages/weird/weird";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MostPage,
    CategoryPage,
    AddPage,
    WeirdPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MostPage,
    CategoryPage,
    AddPage,
    WeirdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
