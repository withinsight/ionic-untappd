import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/inbox/inbox.html',
})

export class InboxPage {
  private inboxSegments = 'notifications';

  constructor(private nav: NavController) {}
}
