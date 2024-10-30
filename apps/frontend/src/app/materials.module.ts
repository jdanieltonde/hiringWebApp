import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ MatNativeDateModule} from '@angular/material/core';
import { MatInputModule} from'@angular/material/input';
import{ MatSelectModule} from '@angular/material/select';
import {MatCardModule} from'@angular/material/card';
import {MatRadioModule} from'@angular/material/radio';
import {MatCheckboxModule} from'@angular/material/checkbox';
import {MatTableDataSource, MatTableModule} from'@angular/material/table';
import {MatPaginatorModule} from'@angular/material/paginator';
import {MatSortModule} from'@angular/material/sort';
import {MatDialogModule} from'@angular/material/dialog';
import{MatTabsModule} from '@angular/material/tabs';
import { MatOption, MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {matDatepickerAnimations, MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import{MatStepperModule} from '@angular/material/stepper'
import {MatListModule} from '@angular/material/list';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatChipsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatTabsModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatStepperModule,
    FormsModule,
    MatSortModule,
    FontAwesomeModule
   
  ]
})
export class MaterialsModule { }
