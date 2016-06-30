import { Component } from '@angular/core';
import { NavParams, NavController, ActionSheet } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/checkin-detail/checkin-detail.html',
})

export class CheckinDetailPage {
  private avatar;
  private name;
  private userName;
  private userLocation;
  private beerName;
  private breweryName;
  private beerIcon;
  private beerStyle;
  private checkinDate;
  private checkinLocationName;
  private checkinLocationAddress;
  private checkinLocationCategory;

  constructor(private navParams: NavParams, public nav: NavController) {

    this.avatar = this.navParams.get('checkin').avatar;
    this.name = this.navParams.get('checkin').name;
    this.userName = this.navParams.get('checkin').userName;
    this.userLocation = this.navParams.get('checkin').userLocation;
    this.beerName = this.navParams.get('checkin').beerName;
    this.breweryName = this.navParams.get('checkin').breweryName;
    this.beerIcon = this.navParams.get('checkin').beerIcon;
    this.beerStyle = this.navParams.get('checkin').beerStyle;
    this.checkinDate = this.navParams.get('checkin').date;
    this.checkinLocationName = this.navParams.get('checkin').locationName;
    this.checkinLocationAddress = this.navParams.get('checkin').locationAddress;
    this.checkinLocationCategory = this.navParams.get('checkin').locationCategory;

  }

  flagAction() {
    let actionSheet = ActionSheet.create({
      title: 'What is wrong with this check-in?',
      buttons: [
        {
          text: 'Flag This Check-in',
          handler: () => {
            console.log('Flag clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    this.nav.present(actionSheet);
    }
}
