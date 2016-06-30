import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CheckinDetailPage } from '../checkin-detail/checkin-detail';
import { FriendCheckins } from '../../providers/friend-checkins/friend-checkins';
import { NearbyCheckins } from '../../providers/nearby-checkins/nearby-checkins';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [FriendCheckins, NearbyCheckins]
})

export class HomePage {

  private homeSegments = 'friends';
  private friendCheckins = [];
  private nearbyCheckins = [];

  constructor(private nav: NavController, private friendCheckinService: FriendCheckins, private nearbyCheckinService: NearbyCheckins) {
    this.friendCheckinService.getFriendCheckins().then((checkins) => {
      if (checkins) {
        this.friendCheckins = checkins;
      }
    });

    this.nearbyCheckinService.getNearbyCheckins().then((checkins) => {
      if (checkins) {
        this.nearbyCheckins = checkins;
      }
    });
  }

  viewCheckin(checkin) {
    this.nav.push(CheckinDetailPage, {
      checkin: checkin
    });
  }
}
