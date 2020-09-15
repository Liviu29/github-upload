import {Injectable} from '@angular/core';
import {MainTab, MetricElement, SubMenuLinkTabs} from './audio-serve.models';

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

  metricElement: MetricElement[] = [
    {name: 'Object Name 1', metric1: 207724, metric2: 2580, metric3: 0, metric4: 7.85, action: false},
    {name: 'Object Name 2', metric1: 397644, metric2: 5930, metric3: 5139, metric4: 11.31, action: false},
    {name: 'Object Name 3', metric1: 1397644, metric2: 10500, metric3: 7381, metric4: 2.99, action: false},
    {name: 'Object Name 4', metric1: 5900644, metric2: 32000, metric3: 87321, metric4: 1.51, action: false},
    {name: 'Object Name 5', metric1: 207724, metric2: 51600, metric3: 0, metric4: 0, action: false}
  ];

  constructor() {
  }

  getAudioServeTabs() {
    return this.audioServeTabs;
  }

  getSubMenuLinkTabs(indexTab: number) {
    return this.subMenuLinkTabs[indexTab];
  }

  getAudioServeTableData() {
    return this.metricElement;
  }

  addMetricElement(newElement: MetricElement) {
    this.metricElement.push(newElement);
  }

  removeMetricElement(index: number) {
    this.metricElement.splice(index, 1);
  }

  editMetricElement(newElement: MetricElement, index: number) {
    this.removeMetricElement(index);
    this.metricElement.splice(index, 0, newElement);
  }
}
