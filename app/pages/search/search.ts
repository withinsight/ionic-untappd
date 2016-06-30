import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecentBeers } from '../../providers/recent-beers/recent-beers';
import { SuggestedBeers } from '../../providers/suggested-beers/suggested-beers';

@Component({
  templateUrl: 'build/pages/search/search.html',
  providers: [RecentBeers, SuggestedBeers]
})

export class SearchPage {

  private searchSegments = 'recent';
  private recentBeers = [];
  private suggestedBeers = [];

  constructor(private nav: NavController, private recentBeersService: RecentBeers, private suggestedBeersService: SuggestedBeers) {
    this.recentBeersService.getRecentBeers().then((beers) => {
      if (beers) {
        this.recentBeers = beers;
      }
    });

    this.suggestedBeersService.getSuggestedBeers().then((beers) => {
      if (beers) {
        this.suggestedBeers = beers;
      }
    });
  }
}
