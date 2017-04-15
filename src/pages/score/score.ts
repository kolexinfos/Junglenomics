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

  score:{animalTotal?:number, relationalTotal?:number, peopleTotal?:number, giveTotal?:number, getTotal?: number} = {}

  animalSection:Boolean = true;
  relationalSection : Boolean = false;
  peopleSection : Boolean = false;
  giveSection : Boolean = false;
  getSection : Boolean = false;

  animalModel:{cardsCount?: string, combined?:string} = {}

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private modalCtrl: ModalController, private messageProvider: MessageProvider)  {
    this.score.animalTotal = 0;
    this.score.relationalTotal = 0;
    this.score.peopleTotal = 0
    this.score.giveTotal = 0;
    this.score.getTotal = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
  }

  AnimalNext(){
    console.log("Next Button on the Animal Page clicked");
    this.relationalSection = true;
    this.animalSection = false

    //console.log(typeof(parseInt(this.animalModel.cardsCount)));
    if(isNaN(parseInt(this.animalModel.cardsCount)) && isNaN(parseInt(this.animalModel.combined))){
        console.log("This is not a number");
        //TODO: Put Toast in here
    }
    else{
      this.score.animalTotal = ((parseInt(this.animalModel.cardsCount) * 10) + (parseInt(this.animalModel.combined) * 20));
    }

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

  RelationalNext(){
    console.log("Next Button on the Relational Page clicked");
    this.relationalSection = false;
    this.peopleSection = true;
  }

  PeopleNext(){
    console.log("Next Button on the People Page clicked");
    this.peopleSection = false;
    this.getSection = true;
  }

  GetNext(){
    console.log("Next Button on the Get Page clicked");
    this.getSection = false;
    this.giveSection = true;
  }

  GiveNext(){
    console.log("Next Button on the Give Page clicked");
  }

}
