import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the Check page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-check',
  templateUrl: 'check.html'
})
export class CheckPage {

  notification: {message?: string} = {};

  constructor(public navCtrl: NavController, public params: NavParams, private viewCtrl: ViewController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckPage');
    this.notification.message = this.params.get('message');
  }

  Register(){
    this.viewCtrl.dismiss();
  }

  

}
