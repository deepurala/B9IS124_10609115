import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule
  ],
  providers: [
    Keyboard,
    SplashScreen,
    ScreenOrientation,
    Vibration,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy

    }
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
