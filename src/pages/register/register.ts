import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { Toast } from 'ionic-native';

import { MessageProvider } from '../../providers/message-provider/message-provider';
/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  register: {email?: string, phone?: string,name?: string} = {};

  submit = false;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  private loadingCtrl: LoadingController,
  private messageProvider: MessageProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

   onSubmit(form)
    {
         let loadingPopup = this.loadingCtrl.create({
                  content: 'Sending your report...',
                  dismissOnPageChange : true
            });
            
        Toast.show("Please wait sending your report...", "short", 'bottom').subscribe(
                            toast => {
                            console.log(toast);
                          }
                    );
        console.log("The details in the form is " + form);
        this.submit = true;     
        
        if(form.valid)
        {  
            loadingPopup.present();

            this.messageProvider.SendReport(this.register).subscribe(
                data => {
                    console.log(data);
                    this.register = {};

                    loadingPopup.dismiss().catch(() => {});
                    this.navCtrl.pop();
                     Toast.show("You report was submitted successfully.", "short", 'bottom').subscribe(
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
                    console.log('Finally called on CreateReport');
                   loadingPopup.dismiss().catch(() => {});
                }
                )
        }
        else{
            Toast.show("Please make sure all the fields are filled in and an image is selected", "long", 'bottom').subscribe(
                            toast => {
                            console.log(toast);
                          });
            
        }
    }


}
