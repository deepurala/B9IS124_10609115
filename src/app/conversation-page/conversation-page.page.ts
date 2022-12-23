import { Component, OnInit, ViewChild } from '@angular/core';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
import { IonInput } from '@ionic/angular';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

@Component({
  selector: 'app-conversation-page',
  templateUrl: './conversation-page.page.html',
  styleUrls: ['./conversation-page.page.scss'],
})
export class ConversationPagePage implements OnInit {

  @ViewChild('myInput') myInput: IonInput;

  constructor(
    private vibration: Vibration,
    public keyboard: Keyboard
    ) { 
    //this.keyboard.
  }

  vibrate(){
    this.vibration.vibrate(500);
  }

  show(){
    this.myInput.setFocus();
  }
  ngOnInit() {
  }

  ionViewWillEnter(){
    let chatSection = document.getElementById("chat");
    chatSection.scrollTop = chatSection.scrollHeight;
  }

}
