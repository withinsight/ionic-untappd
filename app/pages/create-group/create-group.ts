import { Component } from '@angular/core';
import { NavController, Modal } from 'ionic-angular';
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

  constructor(private nav: NavController, private userService: User) {
    this.userService.getUsers().then((users) => {
      if (users) {
        this.users = users;
      }
    });
  }

  presentAddFriendModal() {
    let addFriendModal = Modal.create(RadioListModal, this.users);

    addFriendModal.onDismiss(data => {
      if(data) {
        this.nav.push(HomePage, {
          homeSegments: data
        });
      }
    });

    this.nav.present(addFriendModal);
  }

}
