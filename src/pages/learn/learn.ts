import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { Toast } from 'ionic-native';

/*
  Generated class for the Learn page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html'
})
export class LearnPage {

  fileTransfer: TransferObject = this.transfer.create();

  constructor(private file: File, private loadingCtrl: LoadingController, private transfer: Transfer, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LearnPage');
  }

  download() {

    let loadingPopup = this.loadingCtrl.create({
      content: 'Please wait.....',
      dismissOnPageChange: true
    });

    const proposal = 'http://www.preptitude.com.ng/proposal.pdf';
    const preview = 'http://www.preptitude.com.ng/preview.pdf';
    const playbook = 'http://www.preptitude.com.ng/playbook.pdf';
    
    this.fileTransfer.download(proposal, this.file.dataDirectory +
      'proposal.pdf').then((entry) => {
        console.log('download complete: ' + entry.toURL());
      }, (error) => {
        
        Toast.show(error, "5000", 'bottom').subscribe(
          toast => {
            console.log(toast);
          }
        );
        console.log(error);
      });

      this.fileTransfer.download(preview, this.file.dataDirectory +
      'preview.pdf').then((entry) => {
        console.log('download complete: ' + entry.toURL());

        
      }, (error) => {

        Toast.show(error, "5000", 'bottom').subscribe(
          toast => {
            console.log(toast);
          }
        );

        console.log(error);
      });

      this.fileTransfer.download(playbook, this.file.dataDirectory +
      'playbook.pdf').then((entry) => {
        console.log('download complete: ' + entry.toURL());

        loadingPopup.dismiss().catch(() => { });

        Toast.show("The resources have been downloaded to your root storage folder. Open File Manager to view", "5000", 'bottom').subscribe(
          toast => {
            console.log(toast);
          }
        );
      }, (error) => {
        console.log(error);
        Toast.show(error, "5000", 'bottom').subscribe(
          toast => {
            console.log(toast);
          }
        );
      });


  }

}
