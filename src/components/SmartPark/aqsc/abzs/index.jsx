import React, { useState,useEffect } from 'react';
import './index.scss';
import * as echarts from 'echarts'

export default function Index() {
	const [ aqzs,setAqzs ] = useState((Math.random()*100).toFixed(1));
	const [ hbzs,setHbzs ] = useState((Math.random()*100).toFixed(1));
	useEffect(()=>{
		abzsInitCharts();
	},[]);
	function abzsInitCharts(){
		var chartDom = document.getElementById('abzs-chart');
		var myChart = echarts.init(chartDom);
		var option;
		const chartData1 = [
			{
			  value: aqzs,
			  name: "安全指数",
			},
			{
			  value: 100-aqzs,
			  name: "B",
			}
		  ];
		  const chartData2 = [
			{
			  value: hbzs,
			  name: "环保指数",
			},
			{
			  value: 100-hbzs,
			  name: "B",
			}
		  ];
		  const colorList1 = ['#0084ff','#44454a'];
		  const colorList2 = ['#00d79e','#44454a']
		  const sum = chartData1.reduce((per, cur) => per + cur.value, 0);
		  const gap = (1 * sum) / 100;
		  const pieData1 = [];
		  const pieData2 = [];
		  const gapData = {
			name: "",
			value: gap,
			itemStyle: {
			  color: "transparent",
			},
		  };
		  for (let i = 0; i < chartData1.length; i++) {
			pieData1.push({
			  ...chartData1[i],
			  itemStyle: {
				borderRadius: 100,
				color:colorList1[i]
			  //   shadowColor: "#2a2a34",
			  //   shadowBlur: 5,
			  //   borderColor: "#2a2a34",
			  //   borderWidth: 2,
			  },
			});
			pieData1.push(gapData);
		  
			pieData2.push({
			  ...chartData2[i],
			  itemStyle: {
				  color:colorList2[i],
				borderRadius: 10,
				shadowColor: "#000",
				shadowBlur: 1,
			  },
			});
			pieData2.push(gapData);
		  }
		  
		  option = {
			graphic: {
				elements: [
					{
						type: 'image',
						z: 3,
						style: {
							// image: '../../../../common/images/ahbj.png',
							image:require('../../../../common/images/abzs.png'),
							width: 25,
							height: 25
						},
						left: '21%',
						top: 'center',
						// center: ["25%", "50%"],
						position: [ 100, 100 ]
					}
				]
			},
			series: [
				{
					type: 'gauge',
					radius: '20%',
					center: ["25%", "50%"],
					min: 0,
					max: 100,
					startAngle: 90,
					endAngle: -270,
					axisLine: {
						show: false,
						lineStyle: {
							width: 2,
							color: [[1, 'gray']],
						},
					},
					axisTick: {
						// 刻度
						show: true,
						splitNumber: 10,
						length: 4,
						distance: -20,
						lineStyle: {
							width: 1,
							color: 'gray',
						},
					},
					splitLine: {
						// 分割线
						show: false,
					},
					axisLabel: {
						// 刻度标签
						show: false,
					},
					pointer: {
						// 仪表盘指针
						show: false,
					},
					detail: {
						// 仪表盘详情
						show: false,
					},
					
				},
			  {
				type: "pie",
				z: 3,
				roundCap: true,
				// hoverAnimation: false,
				radius: ["80%", "90%"],
				center: ["25%", "50%"],
				label: {
				  show: false,
				},
				color:['blue','gray'],
				data: pieData1,
			  },{
				type: "pie",
				z: 1,
				roundCap: true,
				// hoverAnimation: false,
				radius: ["65%", "75%"],
				center: ["25%", "50%"],
				label: {
				  show: false,
				},
				color:['green','gray'],
				data: pieData2,
			  },
			 
			],
		  };
		  option && myChart.setOption(option);
	}
	return (
		<div className="abzs">
			<div className="abzs-title">
				<span>安保指数</span>
			</div>
			<div className="abzs-content">
				<div className="abzs-charts">
					<div id='abzs-chart' style={{width:'100%',height:'100%',position:'relative'}}></div>
					<div className='abzs-label'>
						<div className='abzs-aqzs'>
							<span>安全指数</span>
							<span>{aqzs}</span>
						</div>
						<div className='abzs-line'></div>
						<div className='abzs-hbzs'>
							<span>环保指数</span>
							<span>{hbzs}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
