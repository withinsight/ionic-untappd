import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RadioListModal } from '../modals/radio-list/modal-content';
import { User } from '../../providers/user/user';

@Component({
  templateUrl: 'build/pages/create-group/create-group.html',
  providers: [User]
})

export class CreateGroupPage {

  public groupName: string;
  private users;

  constructor(private nav: NavController, private userService: User, private modalCtrl: ModalController) {
    this.userService.getUsers().then((users) => {
      if (users) {
        this.users = users;
      }
    });
  }

  presentAddFriendModal() {
    let addFriendModal = this.modalCtrl.create(RadioListModal, this.users);

    addFriendModal.onDidDismiss(data => {
      if(data) {
        this.nav.push(HomePage, {
          homeSegments: data
        });
      }
    });

    addFriendModal.present();
  }

}
