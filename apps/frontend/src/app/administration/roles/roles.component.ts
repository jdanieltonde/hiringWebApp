import { Component, ViewChild } from '@angular/core';
import { Role } from './roles.model';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MaterialsModule } from '../../materials.module';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RouterModule } from '@angular/router';



export interface PeriodicElement {
  name: string;
  position: number;
  supprimer:''
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Reception',supprimer:''},
  {position: 2, name: 'Notation',supprimer:''},
  {position: 3, name: 'Composition',supprimer:''},
  {position: 4, name: 'Standard',supprimer:''},
 

];


const ELEMENT_DATA2:Role[]=[
  {id:1,nomdurole:'correcteur'},
  {id:2,nomdurole:'Validateur'},
  {id:1,nomdurole:'Verificateur'},
  {id:1,nomdurole:'Controleur'},
  {id:1,nomdurole:'Controleur'},
  {id:1,nomdurole:'Controleur'},
  {id:1,nomdurole:'Controleur'},
  {id:1,nomdurole:'Controleur'},
  {id:1,nomdurole:'Controleur'},
  {id:1,nomdurole:'Controleur'},
  {id:1,nomdurole:'Controleur'},
  {id:1,nomdurole:'Controleur'},
  {id:1,nomdurole:'Controleur'},
]

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [MaterialsModule,RouterModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

  // displayedColumns: string[] = ['position', 'name','supprimer'];
  displayedColumns: string[] = ['id', 'nomdurole','supprimer'];
  dataSource = new MatTableDataSource(ELEMENT_DATA2);

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


  deleteRole(){
    console.log("role deleted")
  }
}
