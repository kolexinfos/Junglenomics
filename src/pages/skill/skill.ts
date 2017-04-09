import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { MessageProvider } from '../../providers/message-provider/message-provider';
import { Toast } from 'ionic-native';

class Answer{
  public questionNumber: number;
    public answer: string;   
    constructor(questionNumber: number, answer: string) {
        this.answer = answer;
        this.questionNumber = questionNumber;
    }
}

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

  answers:Answer[];

  ans:Answer;

  answer:any;

  questionNumber: number = 0

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private messageProvider: MessageProvider,
    private loadingCtrl: LoadingController
    ) {
    
    console.log("Constructor Called");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillPage');
    
  }

  ionViewWillEnter(event){
    console.log("ionViewWillEnter Skillpage");
    this.questions = this.messageProvider.GetData();

    this.answer = 'yes';

    this.answers = [];
    this.questionNumber = 0
    this.question.text = this.questions[this.questionNumber];
  }

  ionViewDidEnter() {
    console.log("View did enter Skillpage");   
  }  

  
  
  Next(){
    if(this.questionNumber != this.questions.length){
    this.question.text = this.questions[this.questionNumber];
    this.questionNumber += 1;

    console.log(this.questionNumber);

    console.log(this.answer);

    this.answers.push(new Answer(this.questionNumber,this.answer));

    console.log(this.answers);

    }
    else{
          this.SendReport();
      }

     this.answer = 'yes' 
  }

SendReport(){

    let loadingPopup = this.loadingCtrl.create({
                  content: 'Please wait sending your SkillMi Quiz result...',
                  dismissOnPageChange : true
            });
    
    this.messageProvider.SendReport(this.answers).subscribe(
      data => {
                    console.log(data);
                    this.answer = {};

                    loadingPopup.dismiss().catch(() => {});
                    this.navCtrl.pop();
                    // this.app.getRootNav().getActiveChildNav().select(1);
                     Toast.show("You SkillMi Quiz response has been sent successfully.", "short", 'bottom').subscribe(
                            toast => {
                            console.log(toast);
                          }
                    );
                },
                err => {
                    loadingPopup.dismiss().catch(() => {});

                    console.log(err);

                     Toast.show("An Error occurred please try again later", "short", 'bottom').subscribe(
                            toast => {
                            console.log(toast);
                          }
                    );
                },
                () => {
                    console.log('Finally Quiz Complete');
                   loadingPopup.dismiss().catch(() => {});
                }
    )
}

}
