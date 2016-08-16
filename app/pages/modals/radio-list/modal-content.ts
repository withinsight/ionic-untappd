import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/modals/radio-list/modal-content.html'
})

export class RadioListModal {

  private users;
  private friendsToAdd:any = {};
  private showAddFriendBtn = false;

  constructor(private navParams: NavParams, private viewCtrl: ViewController) {
    this.users = this.navParams.data;

    for (let user of this.users) {
      this.friendsToAdd[user.userName] = false;
    }

  }

  areFriendsAdded() {
    for (let friend in this.friendsToAdd) {
      if (this.friendsToAdd[friend]) {
        this.showAddFriendBtn = true;
        return;
      } else {
        this.showAddFriendBtn = false;
      }
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
