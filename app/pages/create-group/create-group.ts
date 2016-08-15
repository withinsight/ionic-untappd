import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/create-group/create-group.html',
})

export class CreateGroupPage {

  public groupName: string;

  constructor(private nav: NavController) {

  }

}
