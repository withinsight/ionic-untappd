import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/profile-detail/profile-detail.html',
})
export class ProfileDetailPage {
  private avatar;
  private name;
  private userName;

  constructor(private navParams: NavParams, public nav: NavController) {
    this.avatar = this.navParams.get('checkin').avatar;
    this.name = this.navParams.get('checkin').name;
    this.userName = this.navParams.get('checkin').userName;
;  }
}
