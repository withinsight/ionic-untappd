import { Component } from '@angular/core';
import { NavParams, NavController, ActionSheetController } from 'ionic-angular';
import { User } from '../../providers/user/user';

@Component({
  templateUrl: 'build/pages/profile-detail/profile-detail.html',
  providers: [User]
})

export class ProfileDetailPage {

  private userName;
  private user = {};

  constructor(private navParams: NavParams, public nav: NavController, private userService: User, private actionSheetCtrl: ActionSheetController) {
    this.userName = this.navParams.get('checkin').userName;

    this.userService.getUser(this.userName).then((user) => {
      if (user) {
        this.user = user;
      }
    });
  }

  friendActions() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What would you like to do?',
      buttons: [
        {
          text: 'Remove Friendship',
          role: 'destructive',
          handler: () => {
            console.log('Remove Friendship clicked');
          }
        },{
          text: 'Add to Group',
          handler: () => {
            console.log('Add to Group clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
