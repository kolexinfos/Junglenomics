import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, Tabs } from 'ionic-angular';

import { CheckPage } from '../check/check';

import { MessageProvider } from '../../providers/message-provider/message-provider';
import { Toast } from 'ionic-native';

class Answer {
  public questionNumber: number;
  public answer: string;
  public userEmail: string;
  public dateCreated: string;
  public questionStep: string;

  constructor(questionNumber: number, answer: string, userEmail: string, dateCreated: string, questionStep: string) {
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

  questions: Array<string> = [];

  toggle: boolean = true;
  toggleNext: boolean = true;



  question: { text?: string, step?: string } = {};

  //Collection to keep all question answered, a strong typed collection
  answers: Answer[];

  ans: Answer;

  answer: any;

  //counting the number of cards that are unlocked when points(+1 for yes, -1 for no, 0 for none) are greater than or equal to one
  animalsUnlocked: number = 0;
  othersUnlocked: number = 0

  //The question that is presently being answered the position on the questions array + 1
  questionNumber: number = 0;

  //Questions are divided into FistStep and SecondStep
  questionStep: string = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private messageProvider: MessageProvider,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) {

    console.log("Constructor Called");
    this.question.step = 'SkillMi Quiz';
  }



  FirstStep() {
    console.log("FirstStep Clicked");

    if (this.messageProvider.GetLocalObject("QuizCompleted") == null) {
      this.questionNumber = 0;
      this.toggle = !this.toggle;
      this.questionStep = 'FirstStep';
      this.question.step = 'First Section';

      this.question.text = this.questions[this.questionNumber];
    }
    else {
      let checkModal = this.modalCtrl.create(CheckPage,
        { message: "You have already completed the SkillMi Quiz." });

      checkModal.present();
    }
  }

  SecondStep() {
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

  ionViewWillEnter(event) {
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

  checkUser() {
    if (this.messageProvider.GetLocalObject('userEmail') != null) {
      //this.navCtrl.setRoot(HomePage);
      console.log("user already logged in");
    }
    else {
      let checkModal = this.modalCtrl.create(CheckPage,
        { message: "You are not registered yet on the Junglenomics Platform just yet, please click register below." });

      checkModal.present();

      var tab: Tabs = this.navCtrl.parent;

      tab.select(tab.getByIndex(4));

    }
  }

  EvaluateAnt(): Boolean {
    var points: number = 0;

    this.answers.slice(0, 3).forEach(function (answer) {
      switch (answer.answer) {
        case 'yes':
          points++;
          break
        case 'no':
          points = points - 1
          break
        case 'none':
          //Do nothing
          break;
      }

    });
    console.log('Point = ' + points)
    if (points >= 1) {
      this.animalsUnlocked++;
      this.messageProvider.SetUnlockedCards("ant");
      return true;
    }
    else {
      return false;
    }
  }

  EvaluateElephant(): Boolean {
    var points: number = 0;

    this.answers.slice(9, 12).forEach(function (answer) {

      switch (answer.answer) {
        case 'yes':
          points++;
          break
        case 'no':
          points = points - 1
          break
        case 'none':
          //Do nothing
          break;
      }

    });
    console.log('Point = ' + points)
    if (points >= 1) {
      this.animalsUnlocked++;
      this.messageProvider.SetUnlockedCards('elephant');
      return true;
    }
    else {
      return false;
    }
  }

  EvaluateCheetah(): Boolean {
    var points: number = 0;
    this.answers.slice(3, 6).forEach(function (answer) {

      switch (answer.answer) {
        case 'yes':
          points++;
          break
        case 'no':
          points = points - 1
          break
        case 'none':
          //Do nothing
          break;
      }

    });
    console.log('Point = ' + points)
    if (points >= 1) {
      this.animalsUnlocked++;
      this.messageProvider.SetUnlockedCards('cheetah');
      return true;
    }
    else {
      return false;
    }
  }

  EvaluateButterfly(): Boolean {
    var points: number = 0;

    this.answers.slice(6, 9).forEach(function (answer) {

      switch (answer.answer) {
        case 'yes':
          points++;
          break
        case 'no':
          points = points - 1
          break
        case 'none':
          //Do nothing
          break;
      }

    });
    console.log('Point = ' + points)
    if (points >= 1) {
      this.animalsUnlocked++;
      this.messageProvider.SetUnlockedCards("butterfly");
      return true;
    }
    else {
      return false;
    }
  }
  EvaluateBee(): Boolean {
    var points: number = 0;
    console.log(this.answers.slice(12, 15));

    this.answers.slice(15, 18).forEach(function (answer) {

      switch (answer.answer) {
        case 'yes':
          points++;
          break
        case 'no':
          points = points - 1
          break
        case 'none':
          //Do nothing
          break;
      }

    });
    console.log('Point = ' + points)
    if (points >= 1) {
      this.animalsUnlocked++;
      this.messageProvider.SetUnlockedCards("bee");
      return true;
    }
    else {
      return false;
    }
  }

  EvaluateWasp(): Boolean {
    var points: number = 0;
    this.answers.slice(15, 18).forEach(function (answer) {

      switch (answer.answer) {
        case 'yes':
          points++;
          break
        case 'no':
          points = points - 1
          break
        case 'none':
          //Do nothing
          break;
      }

    });
    console.log('Point = ' + points)
    if (points >= 1) {
      this.animalsUnlocked++;
      this.messageProvider.SetUnlockedCards("wasp");
      return true;
    }
    else {
      return false;
    }
  }

  EvaluateUnlockedCards() {
    this.EvaluateButterfly();
    this.EvaluateAnt();
    this.EvaluateCheetah();
    this.EvaluateElephant();
    this.EvaluateWasp();
    this.EvaluateBee();
  }

  Next() {
    this.checkUser();

    if (this.questionStep == 'FirstStep') {
      this.NextQuestion();
      if (this.questionNumber == 18) {
        this.toggleNext = false;
      }
      else if (this.questionNumber == 19) {

        
        let checkModal = this.modalCtrl.create(CheckPage,
          { message: "You have just completed the First Section of the SkillMi Quiz. The Second Section starts now." });

        checkModal.present();
        this.SecondStep();
      }
    }
    else if (this.questionStep == 'SecondStep' && !(this.questionNumber > this.questions.length - 1)) {
      this.NextQuestion();
      if (this.questionNumber == 63) {
        this.toggleNext = false;
      }
    }
    else {
      this.EvaluateUnlockedCards();
      this.EvaluateOthers();

      console.log("Send Report Called");
      try {
        setTimeout( this.SendReport(), 3000);
      }
      catch (e) {
        console.log(e);
      }
    }

    this.answer = 'yes'
  }



  NextQuestion() {
    if (this.questionNumber == 18 && this.questionStep == "SecondStep") {
      console.log("Delete the duplicate 19 answer");
      this.answers.splice(18, 1);
    }
    this.question.text = this.questions[this.questionNumber];
    this.questionNumber += 1;

    console.log(this.questionNumber);

    console.log(this.answer);

    this.answers.push(new Answer(this.questionNumber, this.answer,
      this.messageProvider.GetLocalObject('userEmail'),
      new Date().toLocaleString('en-GB'), this.questionStep));

    console.log(this.answers);
  }

  SendReport() {

    if(this.animalsUnlocked == 0 || this.othersUnlocked == 0 || this.animalsUnlocked >= 5 && this.othersUnlocked >= 7)
    {
      this.messageProvider.RemoveLocalObject("UnlockedCards")
      let checkModal = this.modalCtrl.create(CheckPage,
          { message: "Inconsistent result please try take the SkillMi Quiz again." });

          checkModal.present();
          this.ionViewWillEnter(this);
      return;
    }

    this.question.step = 'SkillMi Quiz';
    let loadingPopup = this.loadingCtrl.create({
      content: 'Please wait sending your SkillMi Quiz result...',
      dismissOnPageChange: true
    });

    this.messageProvider.SendReport(this.answers).subscribe(
      data => {
        console.log(data);
        this.answer = {};

        loadingPopup.dismiss().catch(() => { });

        let checkModal = this.modalCtrl.create(CheckPage,
          { message: "Thank you for completing the SkillMi Quiz." });

        checkModal.present();

        var tab: Tabs = this.navCtrl.parent;

        tab.select(tab.getByIndex(0));

        this.messageProvider.SetLocalObject('QuizCompleted', 'Done');

        Toast.show("You SkillMi Quiz response has been sent successfully.", "short", 'bottom').subscribe(
          toast => {
            console.log(toast);
          }
        );
      },
      err => {
        loadingPopup.dismiss().catch(() => { });

        console.log(err);

        Toast.show("An Error occurred please try again later", "short", 'bottom').subscribe(
          toast => {
            console.log(toast);
          }
        );
      },
      () => {
        console.log('Finally Quiz Complete');
        loadingPopup.dismiss().catch(() => { });
      }
    )

  }



  EvaluateOthers() {
    this.EvaluateCoreValues();
    this.EvaluateCulture();
    this.EvaluateCoreObjectives();
    this.EvaluatePersonnel();
    this.EvaluatePartners();
    this.EvaluateClientCustomer();
    this.EvaluatePlatforms();
    this.EvaluateBusinessProcesses();
    this.EvaluateProducts();
    this.EvaluateServices();
    this.EvaluateContent();
    this.EvaluateRevenue();
    this.EvaluateGoodWill();
    this.EvaluateLoyalty();
    this.EvaluateInnovation();
  }

  EvaluateCoreValues(): Boolean {
    var points: number = 0;
    console.log(this.answers.slice(18, 21));
    this.answers.slice(18, 21).forEach(function (answer) {

      switch (answer.answer) {
        case 'yes':
          points++;
          break
        case 'no':
          points = points - 1
          break
        case 'none':
          //Do nothing
          break;
      }

    });
    console.log('Point = ' + points)
    if (points >= 1) {
      this.othersUnlocked++;
      this.messageProvider.SetUnlockedCards('corevalues');
      return true;
    }
    else {
      return false;
    }
  }

  EvaluateCulture(): Boolean {
    var points: number = 0;
    console.log(this.answers.slice(21, 24));
    this.answers.slice(21, 24).forEach(function (answer) {

      switch (answer.answer) {
        case 'yes':
          points++;
          break
        case 'no':
          points = points - 1
          break
        case 'none':
          //Do nothing
          break;
      }

    });
    console.log('Point = ' + points)
    if (points >= 1) {
      this.othersUnlocked++;
      this.messageProvider.SetUnlockedCards('culture');
      return true;
    }
    else {
      return false;
    }
  }

  EvaluateCoreObjectives(): Boolean {
    var points: number = 0;
    console.log(this.answers.slice(24, 27));
    this.answers.slice(24, 27).forEach(function (answer) {

      switch (answer.answer) {
        case 'yes':
          points++;
          break
        case 'no':
          points = points - 1
          break
        case 'none':
          //Do nothing
          break;
      }

    });
    console.log('Point = ' + points)
    if (points >= 1) {
      this.othersUnlocked++;
      this.messageProvider.SetUnlockedCards('coreobjectives');
      return true;
    }
    else {
      return false;
    }
  }

  EvaluatePersonnel(): Boolean {
    var points: number = 0;
    console.log(this.answers.slice(27, 30));
    this.answers.slice(27, 30).forEach(function (answer) {

      switch (answer.answer) {
        case 'yes':
          points++;
          break
        case 'no':
          points = points - 1
          break
        case 'none':
          //Do nothing
          break;
      }

    });
    console.log('Point = ' + points)
    if (points >= 1) {
      this.othersUnlocked++;
      this.messageProvider.SetUnlockedCards('personnel');
      return true;
    }
    else {
      return false;
    }
  }

  EvaluatePartners(): Boolean {
    var points: number = 0;
    console.log(this.answers.slice(30, 33));
    this.answers.slice(30, 33).forEach(function (answer) {

      switch (answer.answer) {
        case 'yes':
          points++;
          break
        case 'no':
          points = points - 1
          break
        case 'none':
          //Do nothing
          break;
      }

    });
    console.log('Point = ' + points)
    if (points >= 1) {
      this.othersUnlocked++;
      this.messageProvider.SetUnlockedCards('partners');
      return true;
    }
    else {
      return false;
    }
  }

  EvaluateClientCustomer(): Boolean {
    var points: number = 0;
    console.log(this.answers.slice(33, 36));
    this.answers.slice(33, 36).forEach(function (answer) {

      switch (answer.answer) {
        case 'yes':
          points++;
          break
        case 'no':
          points = points - 1
          break
        case 'none':
          //Do nothing
          break;
      }

    });
    console.log('Point = ' + points)
    if (points >= 1) {
      this.othersUnlocked++;
      this.messageProvider.SetUnlockedCards('clientcustomer');
      return true;
    }
    else {
      return false;
    }
  }

  EvaluatePlatforms(): Boolean {
    var points: number = 0;
    console.log(this.answers.slice(36, 39));
    this.answers.slice(36, 39).forEach(function (answer) {

      switch (answer.answer) {
        case 'yes':
          points++;
          break
        case 'no':
          points = points - 1
          break
        case 'none':
          //Do nothing
          break;
      }

    });
    console.log('Point = ' + points)
    if (points >= 1) {
      this.othersUnlocked++;
      this.messageProvider.SetUnlockedCards('platforms');
      return true;
    }
    else {
      return false;
    }
  }

  EvaluateBusinessProcesses(): Boolean {
    var points: number = 0;
    console.log(this.answers.slice(39, 42));
    this.answers.slice(39, 42).forEach(function (answer) {

      switch (answer.answer) {
        case 'yes':
          points++;
          break
        case 'no':
          points = points - 1
          break
        case 'none':
          //Do nothing
          break;
      }

    });
    console.log('Point = ' + points)
    if (points >= 1) {
      this.othersUnlocked++;
      this.messageProvider.SetUnlockedCards('businessprocesses');
      return true;
    }
    else {
      return false;
    }
  }

  EvaluateProducts(): Boolean {
    var points: number = 0;
    console.log(this.answers.slice(42, 45));
    this.answers.slice(42, 45).forEach(function (answer) {

      switch (answer.answer) {
        case 'yes':
          points++;
          break
        case 'no':
          points = points - 1
          break
        case 'none':
          //Do nothing
          break;
      }

    });
    console.log('Point = ' + points)
    if (points >= 1) {
      this.othersUnlocked++;
      this.messageProvider.SetUnlockedCards('products');
      return true;
    }
    else {
      return false;
    }
  }

  EvaluateServices(): Boolean {
    var points: number = 0;
    console.log(this.answers.slice(45, 48));
    this.answers.slice(45, 48).forEach(function (answer) {

      switch (answer.answer) {
        case 'yes':
          points++;
          break
        case 'no':
          points = points - 1
          break
        case 'none':
          //Do nothing
          break;
      }

    });
    console.log('Point = ' + points)
    if (points >= 1) {
      this.othersUnlocked++;
      this.messageProvider.SetUnlockedCards('services');
      return true;
    }
    else {
      return false;
    }
  }

  EvaluateContent(): Boolean {
    var points: number = 0;
    console.log(this.answers.slice(48, 51));
    this.answers.slice(48, 51).forEach(function (answer) {

      switch (answer.answer) {
        case 'yes':
          points++;
          break
        case 'no':
          points = points - 1
          break
        case 'none':
          //Do nothing
          break;
      }

    });
    console.log('Point = ' + points)
    if (points >= 1) {
      this.othersUnlocked++;
      this.messageProvider.SetUnlockedCards('content');
      return true;
    }
    else {
      return false;
    }
  }

  EvaluateRevenue(): Boolean {
    var points: number = 0;
    console.log(this.answers.slice(51, 54));
    this.answers.slice(51, 54).forEach(function (answer) {

      switch (answer.answer) {
        case 'yes':
          points++;
          break
        case 'no':
          points = points - 1
          break
        case 'none':
          //Do nothing
          break;
      }

    });
    console.log('Point = ' + points)
    if (points >= 1) {
      this.othersUnlocked++;
      this.messageProvider.SetUnlockedCards('revenue');
      return true;
    }
    else {
      return false;
    }
  }

  EvaluateGoodWill(): Boolean {
    var points: number = 0;
    console.log(this.answers.slice(54, 57));
    this.answers.slice(54, 57).forEach(function (answer) {

      switch (answer.answer) {
        case 'yes':
          points++;
          break
        case 'no':
          points = points - 1
          break
        case 'none':
          //Do nothing
          break;
      }

    });
    console.log('Point = ' + points)
    if (points >= 1) {
      this.othersUnlocked++;
      this.messageProvider.SetUnlockedCards('goodwill');
      return true;
    }
    else {
      return false;
    }
  }

  EvaluateLoyalty(): Boolean {
    var points: number = 0;
    console.log(this.answers.slice(57, 60));
    this.answers.slice(57, 60).forEach(function (answer) {

      switch (answer.answer) {
        case 'yes':
          points++;
          break
        case 'no':
          points = points - 1
          break
        case 'none':
          //Do nothing
          break;
      }

    });
    console.log('Point = ' + points)
    if (points >= 1) {
      this.othersUnlocked++;
      this.messageProvider.SetUnlockedCards('loyalty');
      return true;
    }
    else {
      return false;
    }
  }

  EvaluateInnovation(): Boolean {
    var points: number = 0;
    console.log(this.answers.slice(60, 63));
    this.answers.slice(60, 63).forEach(function (answer) {

      switch (answer.answer) {
        case 'yes':
          points++;
          break
        case 'no':
          points = points - 1
          break
        case 'none':
          //Do nothing
          break;
      }

    });
    console.log('Point = ' + points)
    if (points >= 1) {
      this.othersUnlocked++;
      this.messageProvider.SetUnlockedCards('innovation');
      return true;
    }
    else {
      return false;
    }
  }
}
