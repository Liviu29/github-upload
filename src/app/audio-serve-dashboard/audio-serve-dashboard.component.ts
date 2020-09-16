import {Component, OnInit, ViewChild} from '@angular/core';
import {AudioServeService} from '../audio-serve.service';
import {MainTab, MetricElement, SubMenuLinkTabs} from '../audio-serve.models';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {AudioServeDashboardDialogComponent} from '../audio-serve-dashboard-dialog/audio-serve-dashboard-dialog.component';

@Component({
  selector: 'app-audio-serve-dashboard',
  templateUrl: './audio-serve-dashboard.component.html',
  styleUrls: ['./audio-serve-dashboard.component.scss']
})
export class AudioServeDashboardComponent implements OnInit {
  audioServeTabs: MainTab[];
  subMenuLinkTabs: SubMenuLinkTabs[];
  selectedIndex = 0;
  displayedColumns: string[] = ['name', 'metric1', 'metric2', 'metric3', 'metric4', 'action'];
  dataSource = new MatTableDataSource<MetricElement>([]);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private readonly audioServeService: AudioServeService,
              private readonly dialog: MatDialog) {
  }

  ngOnInit() {
    this.addAudioServeTabs();
    this.addAudioServeDataTable();
  }

  addAudioServeTabs() {
    this.audioServeTabs = this.audioServeService.getAudioServeTabs();
    this.subMenuLinkTabs = this.audioServeService.getSubMenuLinkTabs(this.selectedIndex);
  }

  addSubMenuLinkTabs(indexAudioServeTab: number) {
    this.selectedIndex = indexAudioServeTab;
    this.subMenuLinkTabs = this.audioServeService.getSubMenuLinkTabs(this.selectedIndex);
  }

  addAudioServeDataTable() {
    const audioServeDataTable = this.audioServeService.getAudioServeTableData();
    this.dataSource = new MatTableDataSource(audioServeDataTable);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  removeAt(index: number) {
    this.audioServeService.removeMetricElement(index);
    this.addAudioServeDataTable();
  }

  createNew() {
    const dialogRef = this.dialog.open(AudioServeDashboardDialogComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(
      (dataDialog: MetricElement) => {
        if (dataDialog) {
          this.audioServeService.addMetricElement(dataDialog);
          this.addAudioServeDataTable();
        }
      }
    );
  }

  editItem(item: MetricElement, index: number) {
    const dialogRef = this.dialog.open(AudioServeDashboardDialogComponent, {
      width: '500px',
      data: {item}
    });
    dialogRef.afterClosed().subscribe(
      (dataDialog: MetricElement) => {
        if (dataDialog) {
          this.audioServeService.editMetricElement(dataDialog, index);
          this.addAudioServeDataTable();
        }
      }
    );
  }
}
