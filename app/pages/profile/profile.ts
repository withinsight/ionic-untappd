import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsDetailPage } from '../../pages/settings-detail/settings-detail';
import { RecentBeers } from '../../providers/recent-beers/recent-beers'

@Component({
  templateUrl: 'build/pages/profile/profile.html',
  providers: [RecentBeers]
})

export class ProfilePage {

  private userCheckins = [];

  constructor(private nav: NavController, private recentBeersService: RecentBeers) {
    this.recentBeersService.getRecentBeers().then((beers) => {
      if (beers) {
        this.userCheckins = beers;
      }
    });
  }

  openSettings() {
    this.nav.push(SettingsDetailPage);
  }
}
