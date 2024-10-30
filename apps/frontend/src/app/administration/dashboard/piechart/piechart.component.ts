import { Component } from '@angular/core';
import { single } from './data';
import { ViewDimensions } from '@swimlane/ngx-charts/lib/common/types/view-dimension.interface';
import { NgxChartsModule, PieChartModule } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-piechart',
  standalone: true,
  imports: [NgxChartsModule,PieChartModule,],
  templateUrl: './piechart.component.html',
  styleUrl: './piechart.component.css'
})
export class PiechartComponent {

  constructor() {
    // Object.assign(this, { multi });
    Object.assign(this, { single });
  }
  //legend:boolean=true
  single!: any[];
  gradient: boolean = true;
  showLegend: boolean = false;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
   colorScheme2 = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
   };
   dim:ViewDimensions={height:200,width:200}
  
   onSelect(data:Event): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:Event): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:Event): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
