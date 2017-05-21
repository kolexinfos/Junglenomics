import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MessageProvider } from '../../providers/message-provider/message-provider';

class Card {
  public Name:string;
  public Description:string;

  constructor(name: string) {
    this.Name = name;
    this.Description = "";
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

  toggle:boolean= false;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public messageProvider: MessageProvider) 
  {
    console.log("ResultPage Contructor Called");
    
    this.toggle = false;
    this.unlockedCards = this.messageProvider.GetUnlockedCards();

    if(this.unlockedCards == null)
    {
      this.toggle = true;
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter ResultPage');
    this.cards = [];

    for (var i = 0, len = this.unlockedCards.length; i < len; i++) {
        this.AddToCard(this.unlockedCards[i]);
    }
    console.log(this.cards);
  }

  AddToCard(card:string):void
  {
    this.cards.push(new Card(card));
  }

}
