import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular'

import { HomePage } from '../home/home';
import { ScorePage } from '../score/score';
import { SkillPage } from '../skill/skill';
import { LearnPage } from '../learn/learn';
import { RegisterPage } from '../register/register';
import { ResultPage } from '../result/result';



import { MessageProvider } from '../../providers/message-provider/message-provider';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = SkillPage;
  tab6Root: any = ResultPage;
  tab3Root: any = ScorePage;
  tab4Root: any = LearnPage;
  tab5Root: any = RegisterPage;

  registered: boolean = false;

  user:string = '';

  constructor(private messageProvider: MessageProvider, public navCtrl: NavController) {
     if(this.messageProvider.GetLocalObject('userEmail') != null){
         console.log("User Already Registered");
         this.user = 'Profile'
      }
      else{
        //do stuff pertaining to new user
        console.log("User Not Registered");
        this.user = 'Register';
      }
  }

  ionViewDidEnter(event){
      
  }

  GetReference(){
    var tab:Tabs = this.navCtrl.parent;

    
  }

}
