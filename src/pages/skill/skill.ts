import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, Tabs } from 'ionic-angular';

import { CheckPage } from '../check/check';

import { MessageProvider } from '../../providers/message-provider/message-provider';
import { Toast } from 'ionic-native';

class Answer{
    public questionNumber: number;
    public answer: string; 
    public userEmail: string 
    public dateCreated : string
    constructor(questionNumber: number, answer: string, userEmail:string, dateCreated : string) {
        this.answer = answer;
        this.questionNumber = questionNumber;
        this.userEmail = userEmail;
        this.dateCreated = dateCreated;
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

  toggle:boolean = true;

  question: {text?: string} = {};

  answers:Answer[];

  ans:Answer;

  answer:any;

  questionNumber: number = 0

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private messageProvider: MessageProvider,
    private loadingCtrl: LoadingController,
    private modalCtrl:ModalController
    ) {
    
    console.log("Constructor Called");
  }

  FirstStep(){
      console.log("FirstStep Clicked");
      this.toggle = !this.toggle;
  }

  SecondStep(){
      console.log("FirstStep Clicked");
      this.toggle = !this.toggle;
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

    this.toggle = true;
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

  
  
  Next(){
    this.checkUser();
    
    if(this.questionNumber != this.questions.length)
    {
        this.question.text = this.questions[this.questionNumber];
        this.questionNumber += 1;

        console.log(this.questionNumber);

        console.log(this.answer);

        this.answers.push(new Answer(this.questionNumber,this.answer, 
                                    this.messageProvider.GetLocalObject('userEmail'), 
                                    new Date().toLocaleString('en-GB')));

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

                    let checkModal = this.modalCtrl.create(CheckPage,
                    { message: "Thank you for completing the SkillMi Quiz."});

                    checkModal.present();

                    var tab:Tabs = this.navCtrl.parent;     
                    
                    tab.select(tab.getByIndex(0));

                    this.messageProvider.SetLocalObject('SkillStatus', 'Done');
                    
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
