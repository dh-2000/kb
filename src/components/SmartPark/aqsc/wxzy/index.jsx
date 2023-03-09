import React, { useEffect } from 'react';
import './index.scss';
import * as echarts from 'echarts';

export default function Index() {
	useEffect(() => {
		wxzyInitChart();
	}, []);
	function wxzyInitChart() {
		var chartDom = document.getElementById('wxzy-chart');
		var myChart = echarts.init(chartDom);
		var option;

		option = {
			// tooltip: {
			//   trigger: 'axis',
			//   axisPointer: {
			//     type: 'cross',
			//     crossStyle: {
			//       color: '#999'
			//     }
			//   }
			// },
			// height:350,
			grid: {
				left: '6%',
				top: '26%',
				right: '8%',
				bottom: '4%',
				containLabel: true
			},
			legend: {
				data: [ '当月', '当日' ],
				left: 'right',
				textStyle: {
					color: 'rgba(255,255,255,0.4)'
				}
			},
			xAxis: [
				{
					type: 'category',
					data: [ '临时动火', '登高作业', '有限空间作业' ],
					axisPointer: {
						type: 'shadow'
					},
					axisTick: {
						show: false
					},
					axisLine: {
						lineStyle: {
							color: 'rgba(255,255,255,0.7)'
						}
					},
					axisLabel: {
						interval: 0,
						textStyle: {
							fontSize: 10,
							color: 'rgba(255,255,255,0.7)'
						}
					}
				}
			],
			yAxis: [
				{
					type: 'value',
					name: '数量',
					nameTextStyle: {
						color: 'rgba(255,255,255,0.7)',
						padding: [ 0, 20, 0, 0 ]
					},
					min: 0,
					max: 40,
					interval: 10,
					axisLabel: {
						textStyle: {
							fontSize: 10,
							color: 'rgba(255,255,255,0.8)'
						}
					},
					splitLine: {
						lineStyle: {
							color: 'rgba(255,255,255,0.8)'
						}
					}
				}
			],
			series: [
				{
					name: '当月',
					type: 'bar',
					data: [ 29, 14, 3 ],
					barWidth: 12,
					label: {
						show: true,
						position: 'top',
						color: '#fff',
						fontWeight: 'bold',
						fontSize: 10
					},
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
						{
							offset: 0,
							color: '#0081f2'
						},
						{
							offset: 1,
							color: '#0081f260'
						}
					])
				},
				{
					name: '当日',
					type: 'bar',
					data: [ 4, 2, 3 ],
					barWidth: 12,
					label: {
						show: true,
						position: 'top',
						color: '#fff',
						fontWeight: 'bold',
						fontSize: 10
					},//e3b002
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
						{
							offset: 0,
							color: '#e3b002'
						},
						{
							offset: 1,
							color: '#e3b00260'
						}
					])
				}
			]
		};

		option && myChart.setOption(option);
	}
	return (
		<div className="wxzy">
			<div className="wxzy-title">
				<span>危险作业</span>
			</div>
			<div className="wxzy-content">
				<div id="wxzy-chart" style={{ width: '100%', height: '150px' }} />
			</div>
		</div>
	);
}
