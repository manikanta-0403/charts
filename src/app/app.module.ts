import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapboxComponent } from './mapbox/mapbox.component';
import { ChartAComponent } from './chart-a/chart-a.component';
import { ChartBComponent } from './chart-b/chart-b.component';
import { FormsModule } from '@angular/forms';
import { ChartCComponent } from './chart-c/chart-c.component';
import { ChartDComponent } from './chart-d/chart-d.component';

@NgModule({
  declarations: [
    AppComponent,
    MapboxComponent,
    ChartAComponent,
    ChartBComponent,
    ChartCComponent,
    ChartDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
