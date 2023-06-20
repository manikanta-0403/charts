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
  selector: 'app-chart-a',
  templateUrl: './chart-a.component.html',
  styleUrls: ['./chart-a.component.scss'],
})
export class ChartAComponent implements OnInit {
  public activity: any;
  public xData: any;
  public label: any;
  options: any;

  public alpha: any;
  public beta: any;
  public depth: any;
  constructor() {
    this.alpha = 15;
    this.beta = 15;
    this.depth = 40;

    this.options = {
      chart: {
        type: 'column',
        options3d: {
          enabled: true,
          alpha: this.alpha,
          beta: this.beta,
          viewDistance: 25,
          depth: this.depth,
        },
      },

      title: {
        text: 'Total profits of the Industrial sectors',
      },

      xAxis: {
        categories: [
          'Aerospace & Defence',
          'Alternative Energy',
          'Automobiles & Parts',
          'Banks',
          'Beverages',
          'Biotechnology',
          'Chemicals',
          'Commercial Vehicles & Trucks',
          'Computer Hardware',
          'Computer Services',
          'Construction & Materials',
          'Electrical equipment',
          'Electricity',
          'Electronic & Electrical equipment',
          'Electronic Equipment',
          'Equity Investment Instruments',
          'Financial Services',
          'Fixed Line Telecommunications',
          'Food & Drug Retailers',
          'Food Producers',
          'Forestry & Paper',
          'Gas & Water',
          'General Industrials',
          'General Retailers',
          'Health care equipment & services',
          'Household Goods & Home Construction',
          'Industrial Engineering',
          'Industrial Machinery',
          'Industrial Metals & Mining',
          'Industrial Transportation',
          'Internet',
          'Leisure goods',
          'Life Insurance',
          'Media',
          'Mining',
          'Mobile Telecommunications',
          'Nonequity Investment Instruments',
          'Nonlife Insurance',
          'Oil & Gas Producers',
          'Oil Equipment, Services & Distribution',
          'Other Financials',
          'Personal & Household Goods',
          'Personal Goods',
          'Pharmaceuticals',
          'Real Estate Investment & Services',
          'Semiconductors',
          'Software & Computer Services',
          'Support Services',
          'Technology Hardware & Equipment',
          'Telecommunications',
          'Telecommunications equipment',
          'Tobacco',
          'Toys',
          'Travel & Leisure',
        ],
        labels: {
          skew3d: true,
          style: {
            fontSize: '16px',
          },
        },
      },

      yAxis: {
        allowDecimals: false,
        title: {
          text: 'Sum of profits',
          skew3d: true,
        },
      },

      tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: 'Sum of profits {point.y}',
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          depth: 40,
        },
      },

      series: [
        {
          data: [
            387409.19, 7448.61, 1272000.78, 734744.65, 270453.22, -192361.37,
            831481.68, 176.12, 278.72, 186.04, 547897.81, -6388536.47,
            375453.87, 87839.7, 881345, 501.16, 121156.6, 634079.03, 34696.08,
            520213.44, 44341.52, 148021.42, 492844.22, 96992.93, 349139.78,
            312967.42, 711255.49, 474.68, 204347.11, 47529.18, 330.98, 169787.6,
            -101948.58, 69243.33, 348291.4, 74370.11, 381.3, 854.51, 2234612.27,
            189720.33, 5651.47, 708, 311169.28, 1407476.6, 55731.2, 1333.28,
            1381336.74, 125623.88, 1704326.66, 73.86, -78.41, 296930.9, 105.49,
            162434.04,
          ],
          colorByPoint: true,
        },
      ],
    };
  }

  ngOnInit() {
    Highcharts.chart('container', this.options);
  }

  onChange(val: any, type: string) {
    if (type == 'alpha') {
      this.options.chart.options3d.alpha = val;
    }
    if (type == 'beta') {
      this.options.chart.options3d.beta = val;
    }
    if (type == 'depth') {
      this.options.chart.options3d.depth = val;
    }

    Highcharts.chart('container', this.options);
  }
}
