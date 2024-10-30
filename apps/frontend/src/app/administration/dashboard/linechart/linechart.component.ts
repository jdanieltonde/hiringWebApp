import { Component } from '@angular/core';
import { multi } from './data';
import { ChartCommonModule, PieChartModule ,NgxChartsModule, LineChartModule} from '@swimlane/ngx-charts';


@Component({
  selector: 'app-linechart',
  standalone: true,
  imports: [ChartCommonModule,PieChartModule,LineChartModule,NgxChartsModule],
  templateUrl: './linechart.component.html',
  styleUrl: './linechart.component.css'
})
export class LinechartComponent {
  multi!: any[];

  

  // options
  legend:boolean=true
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };


  constructor() {
    Object.assign(this, { multi });
    
  }

  onSelect(multi?:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(multi)));
  }

  onActivate(multi?:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(multi)));
  }

  onDeactivate(multi?:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(multi)));
  }
}
