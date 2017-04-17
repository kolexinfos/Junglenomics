import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Tabs } from 'ionic-angular';

import { MessageProvider } from '../../providers/message-provider/message-provider';
import { CheckPage } from '../check/check';

/*
  Generated class for the Score page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-score',
  templateUrl: 'score.html'
})
export class ScorePage {

  score:{animalTotal?:number, relationalTotal?:number, peopleTotal?:number, giveTotal?:number, getTotal?: number, cardType?:string} = {}
  

  animalModel:{cardsCount?: string, combined?:string, cardType?:string, showInput?:boolean} = {}

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private modalCtrl: ModalController, private messageProvider: MessageProvider)  {
    this.score.animalTotal = 0;
    this.score.cardType = 'AnimalCard'

    this.animalModel.showInput = false;   
    this.animalModel.cardType = 'ant'; 
  }

  AnimalYes(){
      this.animalModel.showInput = true;
  }

  AnimalNo(){
    this
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
  }

  ionViewDidEnter() {
    console.log("View did enter Skillpage");
    this.checkUser(); 
         
  }

  checkUser(){
  if(this.messageProvider.GetLocalObject('userEmail') != null){
      //this.navCtrl.setRoot(HomePage);
      console.log("user already logged in");
    }
    else{
        let checkModal = this.modalCtrl.create(CheckPage,
        { message: "You are not registered yet on the Junglenomics Platform just yet, please click register below."});

        checkModal.present();

        var tab:Tabs = this.navCtrl.parent;     
        
        tab.select(tab.getByIndex(3));               
        
    } 
  }

  
}
