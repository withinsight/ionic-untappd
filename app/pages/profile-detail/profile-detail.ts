import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { User } from '../../providers/user/user';

@Component({
  templateUrl: 'build/pages/profile-detail/profile-detail.html',
  providers: [User]
})

export class ProfileDetailPage {

  private userName;
  private user = {};

  constructor(private navParams: NavParams, public nav: NavController, private userService: User) {
    this.userName = this.navParams.get('checkin').userName;

    this.userService.getUser(this.userName).then((user) => {
      if (user) {
        this.user = user;
      }
    });
  }
}
