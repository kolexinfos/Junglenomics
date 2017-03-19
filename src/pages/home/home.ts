import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {InAppBrowser, SocialSharing, Device} from 'ionic-native';



declare var window;
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
    console.log("View did enter");   
  }

  ShareApp() {
     this.navCtrl.setRoot(HomePage);
     let image = "";

     console.log(Device.platform);
     if(Device.platform == "Android")
     {
       image = "http://234radio.com/wp-content/uploads/2016/06/Download-App-on-Android.png";
     }
     else{
       image = "http://234radio.com/wp-content/uploads/2016/06/Available-on-the-App-Store.png"
     }
     
    SocialSharing.share("Get unlimited access to unparalleled programmes and news on the radio", "234Radio", image).then(() => {
      console.log("Success");
     
    }).catch(() => {
      
      console.log("Error");
      
    });
  }

  openWeb(){
    console.log("Web clicked");
    let browser = new InAppBrowser('http://234radio.com', '_blank', "EnableViewPortScale=yes,location=no" );
    browser.show();
    console.log(browser);
  }

  onSlideChangeStart(event){
    console.log(event);
  }

 

  gotoPrograms(){
    console.log("Programs Clicked");
    let browser = new InAppBrowser('http://234radio.com/programmes/', '_blank', "EnableViewPortScale=yes,location=no" );
    browser.show();
  }

  openFacebook(){
    console.log("Open Facbook");
    let browser = new InAppBrowser('https://www.facebook.com/234radio', '_blank', "EnableViewPortScale=yes,location=no" );
    browser.show();
  }

  openTwitter(){
    console.log("Open Twitter");
    let browser = new InAppBrowser('https://twitter.com/my234Radio', '_blank', "EnableViewPortScale=yes,location=no" );
    browser.show();
  }

  openInstagram(){
    console.log("Open Instagram");
    let browser = new InAppBrowser('http://234radio.com', '_blank', "EnableViewPortScale=yes,location=no" );
    browser.show();
  }

  makeCall(passedNumber){
    console.log("MakeCall passedNumber");
    window.location = passedNumber;
  }

}
