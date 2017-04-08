import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MessageProvider } from '../../providers/message-provider/message-provider';

/*
  Generated class for the Skill page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-skill',
  templateUrl: 'skill.html'
})
export class SkillPage {

  questions:Array<string> = [];

  question: {text?: string} = {};

  questionNumber: number = 0

  constructor(public navCtrl: NavController, public navParams: NavParams, private messageProvider: MessageProvider) {
    this.questions = this.messageProvider.GetData();

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillPage');
    console.log(this.questions);

    this.question.text = this.questions[this.questionNumber];
    this.questionNumber += 1;
  }
  
  Next(){
    if(this.questionNumber != 63){
    this.question.text = this.questions[this.questionNumber];
    this.questionNumber += 1;
    console.log(this.questions.length)
    }
    else{
          this.SendReport();
      }

  }

SendReport(){
    console.log();
}

}
