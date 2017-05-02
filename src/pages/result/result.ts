import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MessageProvider } from '../../providers/message-provider/message-provider';

class Card {
  public Name:string;

  constructor(name: string) {
    this.Name = name;
  }
}
/*
  Generated class for the Result page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})
export class ResultPage {

  unlockedCards:Array<string> = new Array<string>();

  cards:Card[];
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public messageProvider: MessageProvider) 
  {
    this.cards = [];
    this.unlockedCards = this.messageProvider.GetUnlockedCards();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
    // console.log(this.unlockedCards);

    this.unlockedCards.forEach( function(card){
      this.cards.push(new Card(card));
    });
    console.log(this.cards);
  }

  ionViewWillEnter(){
    console.log('ionViewDidLoad ResultPage');
    // console.log(this.unlockedCards);

    this.unlockedCards.forEach( function(card){
      this.cards.push(new Card(card));
    });
    //console.log(this.cards);

  }

}
