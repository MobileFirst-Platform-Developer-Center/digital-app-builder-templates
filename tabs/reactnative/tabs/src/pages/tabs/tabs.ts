import { Component, Renderer } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = SettingsPage;

  constructor(public navCtrl: NavController, public renderer: Renderer) {}

  ionViewDidLoad() {
   
  }
}
