import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FriendStatus } from '../../providers/friend-status/friend-status';
import { NearbyStatus } from '../../providers/nearby-status/nearby-status';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [FriendStatus, NearbyStatus]
})

export class HomePage {

  private homeSegments = 'friends';
  private friendStatii = [];
  private nearbyStatii = [];

  constructor(private navController: NavController, private friendStatusService: FriendStatus, private nearbyStatiiService: NearbyStatus) {
    this.friendStatusService.getFriendStatii().then((statii) => {
      if (statii) {
        this.friendStatii = statii;
      }
    });

    this.nearbyStatiiService.getNearbyStatii().then((statii) => {
      if (statii) {
        this.nearbyStatii = statii;
      }
    });
  }
}
