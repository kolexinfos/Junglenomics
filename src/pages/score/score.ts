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

  score:{animalTotal?:number, relationalTotal?:number, peopleTotal?:number, giveTotal?:number, getTotal?: number, cardType?:string, total?: number} = {}
  

  animalModel:{cardsCount?: number, combined?:string, cardType?:string, showInput?:boolean, total?: number} = {}

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  private modalCtrl: ModalController, 
  private messageProvider: MessageProvider)  {
    this.score.total = 0;
    this.score.cardType = 'AnimalCard'.split(/(?=[A-Z])/).join(' ');

    this.animalModel.showInput = false;   
    this.animalModel.cardType = 'ant';
    this.animalModel.total = 0; 
  }

  AnimalYes(){
      this.animalModel.showInput = !this.animalModel.showInput;
      //console.log(this.animalModel.cardsCount + " : " + typeof(this.animalModel.cardsCount));
  }

  CountSubmit(){

      if(!isNaN(this.animalModel.cardsCount)){
         
        this.animalModel.total = Number(this.animalModel.total) + Number(this.animalModel.cardsCount);
        console.log(this.animalModel.total);

        this.MoveToNextAnimal();
        this.animalModel.showInput = !this.animalModel.showInput;
        this.animalModel.cardsCount = null;

        this.score.total += this.animalModel.total;

      }
      else{
        console.log("naaa");
        let checkModal = this.modalCtrl.create(CheckPage,
        { message: "Please enter a valid number."});

        checkModal.present();
      }
  }

  AnimalNo(){
    this.MoveToNextAnimal();
  }

  MoveToNextAnimal(){
    switch(this.animalModel.cardType)
    {
      case 'ant' :
        console.log("Present on Ant Calc");
        this.animalModel.cardType = 'bee';
        break;
      case 'bee' :
        console.log("Present on Bee Calc");
        this.animalModel.cardType = 'butterfly';
        break;
      case 'butterfly' :
        console.log("Present on Butterfly Calc");
        this.animalModel.cardType = 'cheetah';
        break;
      case 'cheetah' :
        console.log("Present on Cheetah Calc");
        this.animalModel.cardType = 'elephant';
        break;
      case 'elephant' :
        console.log("Present on Elephant Calc");
        this.animalModel.cardType = 'wasp';
        break;
      case 'wasp' :
        console.log("Present on Wasp Calc");
        //this.animalModel.cardType = 'bee';
        break;
    
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
    
  }

  ionViewDidEnter() {
    console.log("View did enter Skillpage");
    this.checkUser(); 
    this.score.animalTotal = 0;
    this.score.cardType = 'AnimalCard'.split(/(?=[A-Z])/).join(' ');

    this.animalModel.showInput = false;   
    this.animalModel.cardType = 'ant';
    this.animalModel.total = 0;
         
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
        
        tab.select(tab.getByIndex(4));               
        
    } 
  }

  
}
