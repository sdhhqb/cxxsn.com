import React from 'react';
import './style.scss';
import populationData from '../../constants/populationData';

class Population extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: 'population chart',
    };
  }

  componentDidMount() {
    this.drawChart();
  }

  // 获取图表option
  getChartOption() {
    let nowYear = new Date().getFullYear();
    let option = {
      color: ['#6aaefc', '#c22b44'],
      title: {
        text: '1929-' + (nowYear - 1) + '中国历年出生人口数',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'axis',
        textStyle: {
          color: '#f1f1f1'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        show: true,
        backgroundColor: '#233247',
        z: -10,
        borderWidth: 0
      },
      xAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#233247'
          }
        },
        axisLabel: {
          rotate: 45,
          textStyle: {
            color: '#8ba7bf'
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          inside: true,
          length: 8,
          lineStyle: {
            color: '#4e5770'
          }
        },
        boundaryGap: false,
        data: []
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: '#8ba7bf'
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: '#3f475e'
          }
        }
      },
      series: [{
        name: '人数',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        lineStyle: {
          normal: {
            color: '#6aaefc'
          }
        },
        data: []
      }]
    };
    return option;
  }

  // 画图
  drawChart() {
    let axisData = [];
    let seriesData = [];
    let option = this.getChartOption();

    populationData.forEach(item => {
      axisData.push(item.year);
      seriesData.push(item.population);
    });
    option.xAxis.data = axisData;
    option.series[0].data = seriesData;

    let myChart = echarts.init(document.getElementById('population_chart'));
    myChart.setOption(option);
  }

  render() {
    return (
      <div className="population">
        <div className="info"></div>
        <div className="chart-wrapper">
          <div id="population_chart" className="chart"></div>
        </div>
      </div>
    );
  }
}

export default Population;
