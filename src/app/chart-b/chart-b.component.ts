import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

import Histogram from 'highcharts/modules/histogram-bellcurve';
Histogram(Highcharts);

import highcharts3D from 'highcharts/highcharts-3d';
highcharts3D(Highcharts);

import Cylinder from 'highcharts/modules/cylinder';
Cylinder(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);

@Component({
  selector: 'app-chart-b',
  templateUrl: './chart-b.component.html',
  styleUrls: ['./chart-b.component.scss'],
})
export class ChartBComponent implements OnInit {
  public chart: any;

  constructor() {
    this.chart = {
      title: {
        text: 'Sum of sales for the particular years',
        align: 'left',
      },
      colors: [
        '#4caefe',
        '#3fbdf3',
        '#35c3e8',
        '#2bc9dc',
        '#20cfe1',
        '#16d4e6',
        '#0dd9db',
        '#03dfd0',
        '#00e4c5',
        '#00e9ba',
        '#00eeaf',
        '#23e274',
      ],
      xAxis: {
        categories: [
          '2010',
          '2011',
          '2012',
          '2013',
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
          '2019',
          '2020',
        ],
      },
      series: [
        {
          type: 'column',
          name: 'Sum of Sales (€million)',
          borderRadius: 5,
          colorByPoint: true,
          data: [
            13894163, 15710758, 16854413, 16723019, 17972595, 17686790,
            17910320, 18448033, 20351620, 21018395, 18952091,
          ],
          showInLegend: false,
        },
      ],
    };
  }

  ngOnInit() {
    Highcharts.chart('containerB', this.chart);
  }
}
