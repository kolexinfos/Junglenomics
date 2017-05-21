import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';

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

  constructor(private file: File, private transfer: Transfer, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LearnPage');
  }

  download() {
    const proposal = 'http://www.preptitude.com.ng/proposal.pdf';
    const preview = 'http://www.preptitude.com.ng/preview.pdf';
    const playbook = 'http://www.preptitude.com.ng/playbook.pdf';
    
    this.fileTransfer.download(proposal, this.file.dataDirectory +
      'file.pdf').then((entry) => {
        console.log('download complete: ' + entry.toURL());
      }, (error) => {
        // handle error
      });

      this.fileTransfer.download(preview, this.file.dataDirectory +
      'file.pdf').then((entry) => {
        console.log('download complete: ' + entry.toURL());
      }, (error) => {
        // handle error
      });

      this.fileTransfer.download(playbook, this.file.dataDirectory +
      'file.pdf').then((entry) => {
        console.log('download complete: ' + entry.toURL());
      }, (error) => {
        // handle error
      });


  }

}
