import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartAComponent } from './chart-a/chart-a.component';
import { ChartBComponent } from './chart-b/chart-b.component';
import { ChartCComponent } from './chart-c/chart-c.component';
import { ChartDComponent } from './chart-d/chart-d.component';
import { MapboxComponent } from './mapbox/mapbox.component';

const routes: Routes = [
  {
    path: 'chart1', component: ChartAComponent
  },
  {
    path: 'chart2', component: ChartBComponent
  },
  {
    path: 'chart3', component: ChartCComponent
  },
  {
    path: 'chart4', component: ChartDComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
