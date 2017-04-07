import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ScorePage } from '../score/score';
//import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ScorePage;
  tab3Root: any = ScorePage;
  tab4Root: any = HomePage;

  constructor() {

  }
}
