import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import './index.scss';
import Tit from '../../../helper/title';

export default function Index() {
	useEffect(() => {
		initCqlChart();
	}, []);
	function initCqlChart() {
		var chartDom = document.getElementById('cjzypt-cql-chart');
		var myChart = echarts.init(chartDom);
		var option;
		var getmax = 100;
		var getvalue = 94.5;
		option = {
			title: [
				{
					text: '出勤率',
					x: 'center',
					y: '80%',
					textStyle: {
						fontWeight: 'bold',
						fontSize: 12,
						color: '#fff'
					}
				}
			],
			angleAxis: {
				show: false,
				max: getmax * 360 / 270, //-45度到225度，二者偏移值是270度除360度
				type: 'value',
				startAngle: 225, //极坐标初始角度
				splitLine: {
					show: false
				}
			},
			barMaxWidth: 6, //圆环宽度
			radiusAxis: {
				show: false,
				type: 'category'
			},
			//圆环位置和大小
			polar: {
				center: [ '50%', '50%' ],
				radius: '180%'
			},
			series: [
				{
					type: 'bar',
					data: [
						{
							//上层圆环，显示数据
							value: getvalue,
							itemStyle: {
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
							}
						}
					],
					barGap: '-100%', //柱间距离,上下两层圆环重合
					coordinateSystem: 'polar',
					roundCap: true, //顶端圆角
					z: 3 //圆环层级，同zindex
				},
				{
					//下层圆环，显示最大值
					type: 'bar',
					data: [
						{
							value: getmax,
							itemStyle: {
								color: 'gray',
								// opacity: 0.2,
								borderWidth: 0
							}
						}
					],
					barGap: '-100%',
					coordinateSystem: 'polar',
					roundCap: true,
					z: 1
				},
				{
					/*内部*/
					type: 'pie',
					radius: [ '0', '60%' ],
					center: [ '50%', '50%' ],
					z: 8,
					// hoverAnimation: false,
					data: [
						{
							name: '',
							value: getvalue,
							itemStyle: {
								color: '#99999950' //内环颜色
							},
							label: {
								formatter: function(params) {
									return '{a|' + params.value + '}{b|%}';
								},
								rich: {
									a: {
										color: 'blue',
										align: 'center',
										fontSize: 16
									},
									b: {
										color: 'blue',
										align: 'center',
										fontSize: 14
									}
								},
								position: 'center',
								show: true
							},
							labelLine: {
								show: false
							}
						}
					]
				}
			]
		};
		option && myChart.setOption(option);
	}
	return (
		<div className="cnc-cjzypt">
			<Tit>车间资源配套</Tit>
			<div className="cjzypt-main">
				<div className="cjzypt-cqry">
					<span className="cjzypt-cqry-title">出勤人员</span>
					<span className="cjzypt-cqry-num">53</span>
				</div>
				<div className="cjzypt-chart">
					<div id="cjzypt-cql-chart" style={{ width: '100%', height: '100px' }} />
				</div>
				<div className="cjzypt-ryzt">
					<div className="cjzypt-ryzs">
						<span className="cjzypt-ryzs-title">人员总数</span>
						<span className="cjzypt-ryzs-num">56</span>
					</div>
					<div className="cjzypt-pjgzsc">
						<span className="cjzypt-pjgzsc-title">人员总数</span>
						<span className="cjzypt-pjgzsc-num">7.5h</span>
					</div>
				</div>
				{/* <div className='cjzypt-line'></div> */}
			</div>
		</div>
	);
}
