import {Component, OnInit} from '@angular/core';
import {AudioServeService} from '../audio-serve.service';
import {MainTab, SubMenuLinkTabs} from '../audio-serve.models';

@Component({
  selector: 'app-audio-serve-dashboard',
  templateUrl: './audio-serve-dashboard.component.html',
  styleUrls: ['./audio-serve-dashboard.component.scss']
})
export class AudioServeDashboardComponent implements OnInit {
  audioServeTabs: MainTab[];
  subMenuLinkTabs: SubMenuLinkTabs[];
  selectedIndex = 0;

  constructor(private readonly audioServeService: AudioServeService) {
  }

  ngOnInit() {
    this.addAudioServeTabs();
  }

  addAudioServeTabs() {
    this.audioServeTabs = this.audioServeService.getAudioServeTabs();
    this.subMenuLinkTabs = this.audioServeService.getSubMenuLinkTabs(this.selectedIndex);
  }

  addSubMenuLinkTabs(indexAudioServeTab: number) {
    this.selectedIndex = indexAudioServeTab;
    this.subMenuLinkTabs = this.audioServeService.getSubMenuLinkTabs(this.selectedIndex);
  }

}
