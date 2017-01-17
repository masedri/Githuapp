import { DetailsPage } from './../details/details';
import { Repositories } from './../../providers/repositories';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Repositories]
})
export class HomePage {

  private title: string = "Githuapp";
  private repositories: Array<any>;
  private username: string;
  private loadRepo: boolean = false;
  private info;

  constructor(public navCtrl: NavController, private repoService: Repositories) {

  }

  getRepos() {
    this.repoService.getRepositories(this.username)
      .subscribe((data) => {
        // console.log(data);
        this.repositories = data.json();
        console.log(data.json());
      })
    this.loadRepo = true;
  }
  getUser() {
    this.repoService.getInforUser(this.username)
      .subscribe((data) => {
        // console.log(data);
        this.info = data.json();
        console.log(data.json());
      });
  }
  newView(repo){
    this.navCtrl.push(DetailsPage, repo);
  }
}
