import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {

  private homeSegments = 'friends';

  constructor(private navController: NavController) {

  }
}
