import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ScorePage } from '../score/score';
import { SkillPage } from '../skill/skill';
import { RegisterPage } from '../register/register';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = SkillPage;
  tab3Root: any = ScorePage;
  tab4Root: any = RegisterPage;

  constructor() {

  }
}
