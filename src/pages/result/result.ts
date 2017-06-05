import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { MessageProvider } from '../../providers/message-provider/message-provider';

class Card {
  public Name:string;
  public Description:string;

  constructor(name: string, descritpion:string) {
    this.Name = name;
    this.Description = descritpion;
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
  

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController, public navParams: NavParams, public messageProvider: MessageProvider) 
  {
    console.log("ResultPage Contructor Called");
    
    this.toggle = false;
    this.unlockedCards = this.messageProvider.GetUnlockedCards().filter(this.onlyUnique);

    if(this.unlockedCards == null)
    {
      this.toggle = true;
    }
    
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter ResultPage');
    this.cards = [];

    for (var i = 0, len = this.unlockedCards.length; i < len; i++) {
        
        var description:string = this.messageProvider.GetCardDescription(this.unlockedCards[i]);

        this.AddToCard(this.unlockedCards[i], description);

        //console.log(description);
    }
    //console.log(this.cards);
  }

  AddToCard(card:string, description:string):void
  {
    this.cards.push(new Card(card, description));
  }

}
