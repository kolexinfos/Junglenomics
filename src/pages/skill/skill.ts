import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, Tabs } from 'ionic-angular';

import { CheckPage } from '../check/check';

import { MessageProvider } from '../../providers/message-provider/message-provider';
import { Toast } from 'ionic-native';

class Answer{
    public questionNumber: number;
    public answer: string; 
    public userEmail: string;
    public dateCreated : string;
    public questionStep : string;

    constructor(questionNumber: number, answer: string, userEmail:string, dateCreated : string, questionStep: string) {
        this.answer = answer;
        this.questionNumber = questionNumber;
        this.userEmail = userEmail;
        this.dateCreated = dateCreated;
        this.questionStep = questionStep;
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
  toggleNext:boolean = true;



  question: {text?: string,step?:string} = {};

  answers:Answer[];

  ans:Answer;

  answer:any;

  animalsUnlocked:number = 0;

  questionNumber: number = 0;

  questionStep:string = '';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private messageProvider: MessageProvider,
    private loadingCtrl: LoadingController,
    private modalCtrl:ModalController
    ) {
    
    console.log("Constructor Called");
    this.question.step = 'SkillMi Quiz';
  }

 

  FirstStep(){
      console.log("FirstStep Clicked");
      
      if(this.messageProvider.GetLocalObject("QuizCompleted") == null){
      this.questionNumber = 0;
      this.toggle = !this.toggle;
      this.questionStep = 'FirstStep';
      this.question.step = 'First Section';

      this.question.text = this.questions[this.questionNumber];
      }
      else{
        let checkModal = this.modalCtrl.create(CheckPage,
        { message: "You have already completed the SkillMi Quiz."});

        checkModal.present();
      }
  }

  SecondStep(){
      console.log("SecondStep Clicked");

      
        this.questionNumber = 18;
        this.question.text = this.questions[this.questionNumber];
        this.questionStep = 'SecondStep';
        this.question.step = "Second Section";

        //this.toggle = !this.toggle;
        this.toggleNext = true;

        console.log(this.questionNumber);
      
      
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
    this.toggleNext = true;

    this.animalsUnlocked = 0;
  }

  ionViewDidEnter() {
    console.log("View did enter Skillpage");
    this.checkUser(); 
         
  }  

  checkUser()
   {
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
  
  EvaluateAnt():Boolean
  {
    var points:number = 0;  
      
    this.answers.slice(0,3).forEach( function(answer){        
        switch(answer.answer)
        {    
          case 'yes' :
            points++;
            break
          case 'no' : 
            points = points - 1
            break
          case 'none' :
            //Do nothing
            break;
        }
      
    });
    console.log('Point = ' + points)
    if(points >= 1)
    { 
      this.animalsUnlocked++;     
      this.messageProvider.SetUnlockedCards( "ant" );
      return true;
    }
    else
    { 
      return false;
    }
  }

  EvaluateElephant():Boolean
  {
    var points:number = 0; 
      
    this.answers.slice(9,12).forEach( function(answer){
        
        switch(answer.answer)
        {    
          case 'yes' :
            points++;
            break
          case 'no' : 
            points = points - 1
            break
          case 'none' :
            //Do nothing
            break;
        }
      
    });
    console.log('Point = ' + points)
    if(points >= 1)
      {
        this.animalsUnlocked++;
        this.messageProvider.SetUnlockedCards( 'elephant' );
        return true;
      }
    else{ 
      return false;
    }
  }

  EvaluateCheetah():Boolean
  {
    var points:number = 0;
    this.answers.slice(3,6).forEach( function(answer){
        
        switch(answer.answer)
        {    
          case 'yes' :
            points++;
            break
          case 'no' : 
            points = points - 1
            break
          case 'none' :
            //Do nothing
            break;
        }
      
    });
    console.log('Point = ' + points)
    if(points >= 1)
    {
      this.animalsUnlocked++;
      this.messageProvider.SetUnlockedCards( 'cheetah' );
      return true;
    }
    else{
      return false;
    }
  }

  EvaluateButterfly():Boolean
  {
    var points:number = 0;

    this.answers.slice(6,9).forEach( function(answer){
        
        switch(answer.answer)
        {    
          case 'yes' :
            points++;
            break
          case 'no' : 
            points = points - 1
            break
          case 'none' :
            //Do nothing
            break;
        }
      
    });
    console.log('Point = ' + points)
    if(points >= 1)
    {
      this.animalsUnlocked++;
      this.messageProvider.SetUnlockedCards("butterfly");
      return true;
    }
    else 
    {
      return false;
    }
  }
  EvaluateBee():Boolean
  {
    var points:number = 0; 
    console.log(this.answers.slice(12,15));
    
    this.answers.slice(15,18).forEach( function(answer){
        
        switch(answer.answer)
        {    
          case 'yes' :
            points++;
            break
          case 'no' : 
            points = points - 1
            break
          case 'none' :
            //Do nothing
            break;
        }
      
    });
    console.log('Point = ' + points)
    if(points >= 1)
    {
      this.animalsUnlocked++;
      this.messageProvider.SetUnlockedCards("bee");
      return true;
    }
    else 
    {
      return false;
    }
  }

  EvaluateWasp():Boolean
  {
    var points:number = 0;    
    this.answers.slice(15,18).forEach( function(answer){
        
        switch(answer.answer)
        {    
          case 'yes' :
            points++;
            break
          case 'no' : 
            points = points - 1
            break
          case 'none' :
            //Do nothing
            break;
        }
      
    });
    console.log('Point = ' + points)
    if(points >= 1)
    {
      this.animalsUnlocked++;
      this.messageProvider.SetUnlockedCards("wasp");
      return true;
    }
    else 
    {
      return false;
    }
  }

  EvaluateUnlockedCards(){
      var butterfly = this.EvaluateButterfly();
      var ant = this.EvaluateAnt();
      var cheetah = this.EvaluateCheetah();
      var elephant = this.EvaluateElephant();
      var wasp = this.EvaluateWasp();
      var bee = this.EvaluateBee();
      
  }
  
  Next(){
    this.checkUser();

    if(this.questionStep == 'FirstStep')
    {
       this.NextQuestion();
       if(this.questionNumber == 18)
       {
         this.toggleNext = false;
       }
       else if(this.questionNumber == 19){

         this.EvaluateUnlockedCards();
         let checkModal = this.modalCtrl.create(CheckPage,
          { message: "You have just completed the First Section of the SkillMi Quiz. The Second Section starts now."});

         checkModal.present();
         this.SecondStep();
       }
    }
    else if (this.questionStep == 'SecondStep' && !(this.questionNumber > this.questions.length - 1)){
        this.NextQuestion();
        if(this.questionNumber == 63)
       {
         this.toggleNext = false;
       }
    }
    else{
          console.log("Send Report Called");
          try{
            
            this.SendReport();
          }
          catch(e){
            console.log(e);
          }
      }

     this.answer = 'yes' 
  }

  NextQuestion(){
    this.question.text = this.questions[this.questionNumber];
        this.questionNumber += 1;

        console.log(this.questionNumber);

        console.log(this.answer);

        this.answers.push(new Answer(this.questionNumber,this.answer, 
                                    this.messageProvider.GetLocalObject('userEmail'), 
                                    new Date().toLocaleString('en-GB'), this.questionStep));

        console.log(this.answers);
  }

SendReport(){

    this.question.step = 'SkillMi Quiz';
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

                    this.messageProvider.SetLocalObject('QuizCompleted', 'Done');
                    
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

EvaluateCoreValues(): Boolean
{
  return true
}

EvaluateCulture(): Boolean
{
  return true
}

EvaluateCoreObjectives(): Boolean
{
  return true
}

EvaluatePersonnel(): Boolean
{
  return true
}

EvaluateCorePartners(): Boolean
{
  return true
}

EvaluateClientCustomer(): Boolean
{
  return true
}

EvaluatePlatforms(): Boolean
{
  return true
}

EvaluateBusinessProcesses(): Boolean
{
  return true
}

EvaluateProducts(): Boolean
{
  return true
}

EvaluateServices(): Boolean
{
  return true
}

EvaluateContent(): Boolean
{
  return true
}

EvaluateRevenue(): Boolean
{
  return true
}

EvaluateGoodWill(): Boolean
{
  return true
}

EvaluateLoyalty(): Boolean
{
  return true
}

EvaluateInnovation(): Boolean
{
  return true
}
}
