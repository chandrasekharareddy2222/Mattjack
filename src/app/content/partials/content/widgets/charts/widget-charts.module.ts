import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
	imports: [
		CommonModule,
		ChartsModule
	],
	exports: [
		BarChartComponent,
		DoughnutChartComponent,
		LineChartComponent ,
	],
	declarations: [
		BarChartComponent,
		DoughnutChartComponent,
		LineChartComponent,
	]
})
export class WidgetChartsModule {}
