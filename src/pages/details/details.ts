import { Repositories } from './../../providers/repositories';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers: [Repositories]
})
export class DetailsPage {
  name: string;
  description: string;
  url: string;
  homepage: string;
  language: string;
  login:any;




  constructor(public navCtrl: NavController, public navParams: NavParams, private repoService: Repositories) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
    this.name = this.navParams.get('name');
    this.description = this.navParams.get('description');
    this.url = this.navParams.get('html_url');
    this.homepage = this.navParams.get('homepage');
    this.language = this.navParams.get('language');
    this.login = this.navParams.get('owner');

  }

}




