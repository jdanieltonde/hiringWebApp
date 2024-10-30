import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MaterialsModule } from '../../materials.module';



export interface PeriodicElement {
  name: string;
  position: number;
  hexadecimal:string,
  supprimer:'';
  color:'',
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Ajourné',color:'',hexadecimal:'#ffffff',supprimer:''},
  {position: 2, name: 'Liste d\'attente ',color:'',hexadecimal:'#ffffff',supprimer:''},
  {position: 3, name: 'Rejeté',color:'',hexadecimal:'#ffffff',supprimer:''},
  {position: 4, name: 'Validé',color:'',hexadecimal:'#ffffff',supprimer:''},
  {position: 4, name: 'Validé',color:'',hexadecimal:'#ffffff',supprimer:''},
  {position: 4, name: 'Validé',color:'',hexadecimal:'#ffffff',supprimer:''},
  {position: 4, name: 'Validé',color:'',hexadecimal:'#ffffff',supprimer:''},
  {position: 4, name: 'Validé',color:'',hexadecimal:'#ffffff',supprimer:''},
  {position: 4, name: 'Validé',color:'',hexadecimal:'#ffffff',supprimer:''},
  {position: 4, name: 'Validé',color:'',hexadecimal:'#ffffff',supprimer:''},
  {position: 4, name: 'Validé',color:'',hexadecimal:'#ffffff',supprimer:''},
  {position: 5, name: 'En cours de verification',color:'',hexadecimal:'#ffffff',supprimer:''},
 

];
/**
 * @title Table with sorting
 */

@Component({
  selector: 'app-validites',
  standalone: true,
  imports: [RouterModule,MaterialsModule],
  templateUrl: './validites.component.html',
  styleUrl: './validites.component.css'
})
export class ValiditesComponent {


  displayedColumns: string[] = ['position', 'name','color','hexadecimal','supprimer'];
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
