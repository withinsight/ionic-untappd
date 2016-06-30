import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Notifications } from '../../providers/notifications/notifications';
import { News } from '../../providers/news/news';


@Component({
  templateUrl: 'build/pages/inbox/inbox.html',
  providers: [Notifications, News]
})

export class InboxPage {

  private inboxSegments = 'notifications';
  private notifications = [];
  private news = [];

  constructor(private nav: NavController, private notificationsService: Notifications, private newsService: News) {
    this.notificationsService.getNotifications().then((notifications) => {
      if (notifications) {
        this.notifications = notifications;
      }
    });

    this.newsService.getNews().then((articles) => {
      if (articles) {
        this.news = articles;
      }
    });
  }
}
