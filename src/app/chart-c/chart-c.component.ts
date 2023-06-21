import { Component, OnInit } from '@angular/core';

import * as Highcharts from "highcharts";
import HC_map from "highcharts/modules/map";
HC_map(Highcharts);


@Component({
  selector: 'app-chart-c',
  templateUrl: './chart-c.component.html',
  styleUrls: ['./chart-c.component.scss'],
})
export class ChartCComponent implements OnInit {
  public chart: any;

  constructor() {
    this.chart = {
      title: {
        text: 'Company Sales and profits',
        align: 'left',
      },
      yAxis: {
        title: {
          text: 'Sales',
        },
      },

      xAxis: {
        title: {
          text: 'Year',
        },
        accessibility: {
          rangeDescription: 'Range: 2010 to 2020',
        },
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: 2010,
        },
      },

      series: [
        {
          name: 'Sum of Sales (€million)',
          data: [
            13894163, 15710758, 16854413, 16723019, 17972595, 17686790,
            17910320, 18448033, 20351620, 21018395, 18952091,
          ],
        },
        {
          name: 'Sum of Capex (€million)',
          data: [
            764435.7498, 892720.585, 1109092.789, 1087703.811, 1131195.571,
            1127502.322, 1167878.202, 1151303.479, 1317342.829, 1404746.798,
            1293241.058,
          ],
        },
        {
          name: 'Sum of Profits (€million)',
          data: [
            -6576872.37, 1702982.03, 1549539.65, 1555429.22, 1735387.21,
            1518669.57, 1671173.01, 1909324.19, 2275661.44, 2077564.89,
            1553985.01,
          ],
        },
        {
          name: 'Sum of Market cap (€million)',
          data: [
            14001791.78, 0, 0, 0, 0, 0, 23081916.37, 24538463.37, 27163043.76,
            27269822.28, 33855136.24,
          ],
        }
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
              },
            },
          },
        ],
      },
    };
  }

  ngOnInit(): void {
    Highcharts.chart('containerC', this.chart);
  }
}
