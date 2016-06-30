import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CheckinDetailPage } from '../checkin-detail/checkin-detail';
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

  constructor(private nav: NavController, private friendStatusService: FriendStatus, private nearbyStatiiService: NearbyStatus) {
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

  viewCheckin(checkin) {
    this.nav.push(CheckinDetailPage, {
      checkin: checkin
    });
  }
}
