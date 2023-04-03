import React, { useEffect } from 'react';
import './index.scss';
import * as echarts from 'echarts';

export default function Index() {
	useEffect(() => {
		initCharts();
	}, []);

	function initCharts() {
		var chartDom = document.getElementById('ahbj-chart');
		var myChart = echarts.init(chartDom);
		// var option;
		var source = [
			{
				name: '安全事件',
				value: 30
			},
			{
				name: '安全事件2',
				value: 30
			}
		];

		var data = [];
		var len = source.length || 0;
		var color = [ 'orange' ];
		//fec246   e68620	todo 渐变色
		for (var i = 0; i < len; i++) {
			data.push(
				{
					value: source[i].value,
					name: source[i].name,
					itemStyle: {
						borderRaduis: 100,
						borderWidth: 2,
						shadowBlur: 1,
						borderColor: 'orange',
						shadowColor: 'orange'
					}
				},
				{
					value: source[len - 1 - i].value,
					name: '',
					itemStyle: {
						color: 'transparent'
					}
				}
			);
		}
		var seriesOption = [
			{
				name: '',
				type: 'pie',
				radius: [ 45, 48 ],
				// hoverAnimation: false,
				label: {
					show: false
				},
				data: data
			},
			{
				type: 'pie',
				silent: true,
				radius: [ 37, 39 ],
				itemStyle: {
					color: 'orange'
				},
				labelLine: {
					show: false
				},
				data: [ 100 ]
			},
			{
				name: '',
				type: 'pie',
				z: -1,
				itemStyle: {
					color: 'gray'
				},
				radius: [ 46, 47 ],
				// hoverAnimation: false,
				label: {
					show: false
				},
				data: [ 100 ]
			}
		];
		let option = {
			height: 120,
			width: '100%',
			graphic: {
				elements: [
					{
						type: 'image',
						z: 3,
						style: {
							image: require('../../../../common/images/ahbj.png'),
							width: 40,
							height: 40
						},
						left: 'center',
						top: 'center',
						position: [ 100, 100 ]
					}
				]
			},
			color: color,
			tooltip: {
				show: false
			},

			toolbox: {
				show: false
			},
			series: seriesOption
		};
		option && myChart.setOption(option);
	}

	return (
		<div className="ahbj">
			<div className="ahbj-title">
				<span>安环报警</span>
			</div>
			<div className="ahbj-content">
				<div className="ahbj-chart">
					<div id="ahbj-chart" style={{ width: '100%', height: '120px' }} />
					<div className="ahbj-label">
						<div className="ahbj-dot" />
						<div className="ahbj-line1" />
						<div className="ahbj-line2" />
						<div className="ahbj-name">安全事件</div>
						{/* <div className='ahbj-left-trigon'></div>
						<div className='ahbj-right-trigon'></div> */}
					</div>
				</div>
			</div>
		</div>
	);
}
