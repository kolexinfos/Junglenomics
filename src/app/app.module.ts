import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { ScorePage } from '../pages/score/score';
import { TabsPage } from '../pages/tabs/tabs';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TutorialPage,
    ScorePage,
    TabsPage
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
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
