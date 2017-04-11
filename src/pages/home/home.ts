import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController, Tabs } from 'ionic-angular';
import {InAppBrowser, SocialSharing, Device} from 'ionic-native';

//Pages
import { ScorePage } from '../score/score';
import { CheckPage } from '../check/check';

//Providers Services Factories
import { MessageProvider } from '../../providers/message-provider/message-provider';


/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'home.html'
})
export class HomePage {

mySlideOptions = {
    initialSlide: 1,
    loop: true,
    autoplay: 5000,
    pager:true
  }; 

  constructor(public navCtrl: NavController, 
  public loadingCtrl: LoadingController,
  private messageProvider: MessageProvider,
  private modalCtrl:ModalController) {    
    console.log("Constructor called");
  }
  
  ionViewDidEnter() {
    console.log("View did enter Homepage"); 
     if(this.messageProvider.GetLocalObject('userEmail') != null){
      //this.navCtrl.setRoot(HomePage);
      console.log("user already logged in");
    }
    else{
        let checkModal = this.modalCtrl.create(CheckPage, 
        {message: "You are not registered yet on the Junglenomics Platform just yet, please click register below."});

        checkModal.present();

        var tab:Tabs = this.navCtrl.parent;
        tab.select(3); 

    }  
  }  

  onSlideChangeStart(event){
    console.log(event);
  }

  ionViewWillEnter(event){
    console.log("ionViewWillEnter Homepage");

    console.log(this.messageProvider.GetLocalObject('userEmail'));

   
  }

  ionViewDidLoad(event){
    console.log("ionViewDidLoad Homepage");
  }

  gotoCalculate(){
    this.navCtrl.push(ScorePage);
  } 

  gotoPrograms(){
    console.log("Programs Clicked");
    let browser = new InAppBrowser('http://234radio.com/programmes/', '_blank', "EnableViewPortScale=yes,location=no" );
    browser.show();
  }

}
