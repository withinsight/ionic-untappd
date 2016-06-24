import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {InboxPage} from '../inbox/inbox';
import {NearbyPage} from '../nearby/nearby';
import {ProfilePage} from '../profile/profile';
import {SearchPage} from '../search/search';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;
  private tab5Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = NearbyPage;
    this.tab3Root = SearchPage;
    this.tab4Root = ProfilePage;
    this.tab5Root = InboxPage;
  }
}
