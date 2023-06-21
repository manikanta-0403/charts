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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    MapboxComponent,
    ChartAComponent,
    ChartBComponent,
    ChartCComponent,
    ChartDComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    NgFor,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
