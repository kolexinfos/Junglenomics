import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Tabs } from 'ionic-angular';

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

  register: {email?: string, phone?: string,username?: string, password?:string, organization?:string} = {};

  user: {fullname?:string, email?: string, organization?: string} = {};

  submit:boolean = false;

  toggle:boolean= true;

  pageTitle:string = ''; 

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  private loadingCtrl: LoadingController,
  private messageProvider: MessageProvider) {
    if(this.messageProvider.GetLocalObject('userEmail') == null)
    {
      this.toggle = true;
      this.pageTitle = 'Register';
    }
    else{
    this.toggle = false;
    this.pageTitle = "User Profile";
    }

    this.user.fullname = this.messageProvider.GetLocalObject('userFullname');
    this.user.email = this.messageProvider.GetLocalObject("userEmail");
    this.user.organization = this.messageProvider.GetLocalObject("userOrganization");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');    
  }

  ionViewDidEnter() {
    console.log("View did enter RegisterPage");   
  }  

  ionViewWillEnter(event){
    console.log("ionViewWillEnter RegisterPage");
  }  

  onSubmit(form)
    {
         let loadingPopup = this.loadingCtrl.create({
                  content: 'Please wait sending your registration details...',
                  dismissOnPageChange : true
            });
            
        Toast.show("Please wait...", "short", 'bottom').subscribe(
                            toast => {
                            console.log(toast);
                          }
                    );
        console.log("The details in the form is " + form);
        this.submit = true;     
        
        if(form.valid)
        {  
            loadingPopup.present();

            this.messageProvider.Register(this.register).subscribe(
                data => {
                    console.log(data);
                    

                    loadingPopup.dismiss().catch(() => {});
                    
                    this.messageProvider.SetLocalObject("userEmail", this.register.email);
                    this.messageProvider.SetLocalObject("userFullname", this.register.username);
                    this.messageProvider.SetLocalObject("userOrganization", this.register.organization);

                     Toast.show("You have been registered successfully.", "short", 'bottom').subscribe(
                            toast => {
                            console.log(toast);
                          }
                    );
                        var tab:Tabs = this.navCtrl.parent;     
        
                        tab.select(tab.getByIndex(0));

                        tab.getByIndex(4).tabTitle = "Profile";

                        this.register = {};

                        this.toggle = false;

                        this.user.fullname = this.messageProvider.GetLocalObject('userFullname');
                        this.user.email = this.messageProvider.GetLocalObject("userEmail");
                        this.user.organization = this.messageProvider.GetLocalObject("userOrganization");
                },
                err => {

                    //TODO Automatically login user if email already exists
                    loadingPopup.dismiss().catch(() => {});

                    console.log(err);

                     Toast.show("An Error occurred please try again later", "short", 'bottom').subscribe(
                            toast => {
                            console.log(toast);
                          }
                    );
                },
                () => {
                    console.log('Finally Registration Complete');
                   loadingPopup.dismiss().catch(() => {});
                }
                )
        }
        else{
            Toast.show("Please make sure all the fields are filled.", "long", 'bottom').subscribe(
                            toast => {
                            console.log(toast);
                          });
            
        }
    }


}
