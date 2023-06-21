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

const MouseWheelZoom = require('highcharts/modules/mouse-wheel-zoom');
MouseWheelZoom(Highcharts);

@Component({
  selector: 'app-chart-d',
  templateUrl: './chart-d.component.html',
  styleUrls: ['./chart-d.component.scss'],
})
export class ChartDComponent implements OnInit {
  public chart: any;

  constructor() {
    this.chart = {
      chart: {
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 10,
          beta: 25,
          depth: 70,
        },
        zooming: {
          mouseWheel: true
      },
      },
      title: {
        text: 'Industries and there sum of sales',
        align: 'left',
      },
      subtitle: {
        text:
          'Source: ' +
          '<a href="https://www.ssb.no/en/statbank/table/08804/"' +
          'target="_blank">SSB</a>',
        align: 'left',
      },
      plotOptions: {
        column: {
          depth: 25,
        },
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
          'Pharmaceutical',
          'Real Estate Intment & Services',
          'Semiconductors',
          'Software & Coustmer Services',
          'Support Servic',
          'Technology Hardware & Equipment',
          'Telecommunicats',
          'Telecommunicats equipment',
          'Tobacco',
          'Toys',
          'Travel & Leisu',
        ],
        labels: {
          skew3d: true,
          style: {
            fontSize: '16px',
          },
        },
      },
      yAxis: {
        title: {
          text: 'Sum of Profits (€million)',
          margin: 20,
        },
      },
      tooltip: {
        valueSuffix: 'Sum of Profits (€million)',
      },
      series: [
        {
          name: 'Total imports',
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
        },
      ],
      zooming: {
        mouseWheel: true,
      },
    };
  }

  ngOnInit(): void {
    Highcharts.chart('containerD', this.chart);
  }
}
