import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FriendStatus} from '../../providers/friend-status/friend-status';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [FriendStatus]
})

export class HomePage {

  private homeSegments = 'friends';
  private statii = [];

  constructor(private navController: NavController, private friendStatusService: FriendStatus) {
    this.friendStatusService.getFriendStatii().then((statii) => {
      if(statii) {
        this.statii = statii;
      }
    });
  }
}
