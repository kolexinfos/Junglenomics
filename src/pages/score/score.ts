import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  animalSection:Boolean = true;
  relationalSection : Boolean = false;
  peopleSection : Boolean = false;
  giveSection : Boolean = false;
  getSection : Boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
  }

  AnimalNext(){
    console.log("Next Button on the Animal Page clicked");
    this.relationalSection = true;
    this.animalSection = false

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
