import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MaterialsModule } from '../../materials.module';
import { ChartCommonModule, LineChartModule, NgxChartsModule, PieChartModule } from '@swimlane/ngx-charts';
import { PiechartComponent } from "./piechart/piechart.component";
import { LinechartComponent } from "./linechart/linechart.component";


export interface PeriodicElement {
  recrutement: string;
  etape: string;
  totalCandidats:number,
  enregistrements:number;
  signalements:number,
}
const ELEMENT_DATA: PeriodicElement[] = [
  {recrutement: '05 Developpeurs d\'application', etape: 'Dépot ',totalCandidats:1003,enregistrements:5,signalements:0},
  {recrutement:'01 Ingenieur système', etape: 'Psychotechnique',totalCandidats:190,enregistrements:12,signalements:1},
  {recrutement: '03 Developpeurs web', etape: 'Dépot',totalCandidats:467,enregistrements:0,signalements:3},
  {recrutement: '02 Ingénieurs sytèmes et sécurité ', etape: 'Ecrite',totalCandidats:94,enregistrements:9,signalements:0},
  {recrutement: '10 Ingénieurs électriques', etape: 'Pratique',totalCandidats:678,enregistrements:14,signalements:0},
 

];


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, MaterialsModule, PieChartModule, LineChartModule, PiechartComponent, LinechartComponent,NgxChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  displayedColumns: string[] = ['recrutement', 'etape','totalCandidats','enregistrements','signalements'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer,) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  onPageChange($event:Event){

  }

}
