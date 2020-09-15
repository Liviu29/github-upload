import {Injectable} from '@angular/core';
import {MainTab, SubMenuLinkTabs} from './audio-serve.models';

@Injectable({
  providedIn: 'root'
})
export class AudioServeService {
  audioServeTabs: MainTab[] = [{label: 'Main Tab1'}, {label: 'Main Tab2'}, {label: 'Main Tab3'}, {label: 'Main Tab4'}, {label: 'Main Tab5'}, {label: 'Main Tab6'}];

  subMenuLinkTabs: SubMenuLinkTabs[][] = [
    [{label: 'Sub Menu Link1'}, {label: 'Sub Menu Link1'}, {label: 'Sub Menu Link1'}, {label: 'Sub Menu Link1'}, {label: 'Sub Menu Link1'}, {label: 'Sub Menu Link1'}],
    [{label: 'Sub Menu Link2'}, {label: 'Sub Menu Link2'}, {label: 'Sub Menu Link2'}, {label: 'Sub Menu Link2'}, {label: 'Sub Menu Link2'}, {label: 'Sub Menu Link2'}],
    [{label: 'Sub Menu Link3'}, {label: 'Sub Menu Link3'}, {label: 'Sub Menu Link3'}, {label: 'Sub Menu Link3'}, {label: 'Sub Menu Link3'}, {label: 'Sub Menu Link3'}],
    [{label: 'Sub Menu Link4'}, {label: 'Sub Menu Link4'}, {label: 'Sub Menu Link4'}, {label: 'Sub Menu Link4'}, {label: 'Sub Menu Link4'}, {label: 'Sub Menu Link4'}],
    [{label: 'Sub Menu Link5'}, {label: 'Sub Menu Link5'}, {label: 'Sub Menu Link5'}, {label: 'Sub Menu Link5'}, {label: 'Sub Menu Link5'}, {label: 'Sub Menu Link5'}],
    [{label: 'Sub Menu Link6'}, {label: 'Sub Menu Link6'}, {label: 'Sub Menu Link6'}, {label: 'Sub Menu Link6'}, {label: 'Sub Menu Link6'}, {label: 'Sub Menu Link6'}],
  ];

  constructor() {
  }

  getAudioServeTabs() {
    return this.audioServeTabs;
  }

  getSubMenuLinkTabs(indexTab: number) {
    return this.subMenuLinkTabs[indexTab];
  }
}
