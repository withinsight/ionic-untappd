import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/search/search.html',
})

export class SearchPage {

  private searchSegments = 'recent';

  constructor(private nav: NavController) {}
}
