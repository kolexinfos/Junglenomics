import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {InAppBrowser, SocialSharing, Device} from 'ionic-native';
import { ScorePage } from '../score/score';


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

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {    
    console.log("Constructor called");
  }
  
  ionViewDidEnter() {
    console.log("View did enter Homepage");   
  }  

  onSlideChangeStart(event){
    console.log(event);
  }

  ionViewWillEnter(event){
    console.log("ionViewWillEnter Homepage");
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
