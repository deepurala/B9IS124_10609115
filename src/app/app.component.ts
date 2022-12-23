import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { initialize } from '@ionic/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private screenOrientation: ScreenOrientation,
    private splashScreen: SplashScreen
  ) {
    this.initializeApp();
  }

  initializeApp(){
    this.splashScreen.show();
    this.platform.ready().then(() => {
      setTimeout(() =>{
        this.splashScreen.hide();
      },4000);
    })

    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
}
