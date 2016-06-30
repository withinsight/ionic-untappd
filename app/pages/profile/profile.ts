import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
}
