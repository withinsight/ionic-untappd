import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { CheckinDetailPage } from '../checkin-detail/checkin-detail';
import { ProfileDetailPage } from '../profile-detail/profile-detail';
import { CreateGroupPage } from '../create-group/create-group';
import { FriendCheckins } from '../../providers/friend-checkins/friend-checkins';
import { NearbyCheckins } from '../../providers/nearby-checkins/nearby-checkins';
import { User } from '../../providers/user/user';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [FriendCheckins, NearbyCheckins, User]
})

export class HomePage {

  private homeSegments;
  private friendCheckins = [];
  private nearbyCheckins = [];
  private currentUser = '';

  constructor(private navParams: NavParams, private nav: NavController, private friendCheckinService: FriendCheckins, private nearbyCheckinService: NearbyCheckins, private userService: User) {
    this.homeSegments = this.navParams.data.homeSegments || 'friends';

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

  viewProfile(checkin) {
    this.nav.push(ProfileDetailPage, {
      checkin: checkin
    });
  }

  toastCheckin(checkin) {
    this.userService.getUser('mathematical').then((user) => {
      if (user) {
        this.currentUser = user.name;
        checkin.toasted = !checkin.toasted;
        checkin.toasts.push(this.currentUser);
      }
    });
  }

  createGroup() {
    this.nav.push(CreateGroupPage);
  }
}
