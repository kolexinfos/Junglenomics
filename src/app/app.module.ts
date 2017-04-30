import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { ScorePage } from '../pages/score/score';
import { TabsPage } from '../pages/tabs/tabs';
import { SkillPage } from '../pages/skill/skill';
import { RegisterPage } from '../pages/register/register';
import { CheckPage } from '../pages/check/check';
import { LearnPage } from '../pages/learn/learn';
import { ResultPage } from '../pages/result/result';

import { MessageProvider } from '../providers/message-provider/message-provider';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TutorialPage,
    ScorePage,
    TabsPage,
    SkillPage,
    RegisterPage,
    CheckPage,
    LearnPage,
    ResultPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TutorialPage,
    ScorePage,
    TabsPage,
    SkillPage,
    RegisterPage,
    CheckPage,
    LearnPage,
    ResultPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, MessageProvider]
})
export class AppModule {}
