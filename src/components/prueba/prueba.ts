import { Repositories } from './../../providers/repositories';
import { Component, OnInit, Input } from '@angular/core';

/*
  Generated class for the Prueba component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'prueba',
  templateUrl: 'prueba.html',
  providers:[Repositories]
})
export class PruebaComponent implements OnInit {
  text: string;
  info: string;
  @Input() username: string;

  constructor(private repoService: Repositories) {
    console.log('Hello Prueba Component');
  }

  ngOnInit(){
    this.text = 'Hello Prueba componenet';

    this.repoService.getInforUser(this.username)
      .subscribe((data) => {
        // console.log(data);
        this.info = data.json();
        console.log(data.json());
      });

  }






}
