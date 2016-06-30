import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/checkin-detail/checkin-detail.html',
})

export class CheckinDetailPage {
  private name;
  private userName;
  private userLocation;
  private beerName;
  private breweryName;
  private beerStyle;
  private checkinLocation;
  private checkinLocationCategory;

  constructor(private navParams: NavParams) {

    this.name = this.navParams.get('checkin').name;
    this.userName = this.navParams.get('checkin').userName;
    this.userLocation = this.navParams.get('checkin').userLocation;
    this.beerName = this.navParams.get('checkin').beerName;
    this.breweryName = this.navParams.get('checkin').breweryName;
    this.beerStyle = this.navParams.get('checkin').beerStyle;
    this.checkinLocation = this.navParams.get('checkin').location;
    this.checkinLocationCategory = this.navParams.get('checkin').locationCategory;

  }
}
