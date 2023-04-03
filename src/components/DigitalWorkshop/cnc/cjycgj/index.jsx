import React, { useEffect } from 'react';
import './index.scss';
import Tit from '../../../helper/title';
import * as echarts from 'echarts';

export default function Cjycgj() {
	const cjycgjData = [
		{
			name: '质量',
			value: 8
		},
		{
			name: '配套',
			value: 14
		},
		{
			name: '设备',
			value: 3
		},
		{
			name: '人员',
			value: 1
		},
		{
			name: '安全',
			value: 0
		},
		{
			name: '工装',
			value: 4
		}
	];
    let colorList = ['blue','gray','gray','gray','gray','gray'];
    let timer,myChart;
    function addActive (){
        timer = setInterval(()=>{
            const list = document.querySelector('.cjycgj-list');
            const activeNode = document.querySelector('.cjycgj-list>.active')
            let nodeArr = list.children;
            if(activeNode){
                //获取激活的节点索引
                let activeIndex = Array.prototype.indexOf.call(nodeArr,activeNode);
                activeNode.classList.remove('active');
                // console.log(activeIndex);
                colorList[activeIndex] = 'gray';
                if(activeIndex < nodeArr.length-1){
                    nodeArr[activeIndex+1].classList.add('active');
                    colorList[activeIndex+1] = 'blue';
                }else{
                    nodeArr[0].classList.add('active');
                    colorList[0] = 'blue';
                }
            }else {
                nodeArr[0].classList.add('active');
                colorList[0] = 'blue';
            }
            changeChartColor(colorList);
        },3000)
    }
	function initCjycgjChart() {
		var chartDom = document.getElementById('cjycgj-chart');
		myChart = echarts.init(chartDom);
		var option;
		const chartData1 = cjycgjData;
		const chartData2 = [ 25, 25, 25, 25 ];
		// const colorList1 = [ '#0084ff', '#44454a' ];
		// const colorList2 = [ '#00d79e', '#44454a' ];
		const sum = chartData1.reduce((per, cur) => per + cur.value, 0);
		const gap = 1 * sum / 100;
		const pieData1 = [];
		const pieData2 = [];
		const gapData = {
			name: '',
			value: gap,
			itemStyle: {
				color: 'transparent'
			}
		};
		for (let i = 0; i < chartData1.length; i++) {
			pieData1.push({
				...chartData1[i],
				itemStyle: {
					borderRadius: 100,
                    // color:colorList[i]
				}
			});
			pieData1.push(gapData);

			pieData2.push({
				...chartData2[i],
				itemStyle: {
					// color: colorList2[i],
					borderRadius: 100,
					shadowColor: 'transparent',
					shadowBlur: 1,
					borderColor: 'transparent',
					borderWidth: 2
				}
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
							image: require('../../../../common/images/warn.png'),
							width: 35,
							height: 35
						},
						left: 'center',
						top: 'center',
						// center: ["25%", "50%"],
						position: [ 100, 100 ]
					}
				]
			},
			series: [
				{
					type: 'pie',
					z: 3,
					roundCap: true,
					// hoverAnimation: false,
					radius: [ '80%', '89%' ],
					center: [ '50%', '50%' ],
					label: {
						show: false
					},
                    // color:['blue','red','yellow','green','pink','orange','white'],
                    color:colorList,
					data: pieData1
				},
				{
					type: 'pie',
					z: 1,
					roundCap: true,
					// hoverAnimation: false,
					radius: [ '75%', '77%' ],
					center: [ '50%', '50%' ],
					label: {
						show: false
					},
					color: [ 'transparent', 'gray' ],
					// data: pieData2,
					data: [ 25, 25, 25, 25 ]
				}
			]
		};
		option && myChart.setOption(option);
	}
    function onActive(e){
        
        const selectElement = e.currentTarget;
        const activeNode = document.querySelector('.cjycgj-list>.active');
        if(selectElement === activeNode){
            return
        }else {
            const nodeArr = document.querySelector('.cjycgj-list').children;
            let activeIndex = Array.prototype.indexOf.call(nodeArr,activeNode);
            let selectIndex = Array.prototype.indexOf.call(nodeArr,selectElement);
            activeNode.classList.remove('active');
            selectElement.classList.add('active');
            colorList[selectIndex] = 'blue';
            colorList[activeIndex] = 'gray';
            changeChartColor(colorList);
        }
    }
    function changeChartColor(list){
        myChart.setOption({
            series:[{
                color:list
            },{}]
        })
    }
	useEffect(() => {
        // async function start (){
        //     await initCjycgjChart();
        //     await addActive();
        // }
		// start();
        initCjycgjChart();
        addActive();
        return ()=>{
            if(timer){
                clearInterval(timer);
            }
        }
	}, []);
	return (
		<div className="cnc-cjycgj">
			<Tit>车间异常告警</Tit>
			<div className="cjycgj-main">
				<div id="cjycgj-chart" />
				<div className="cjycgj-label">
					<ul className='cjycgj-list'>
						{cjycgjData.map((item,index) => (
							<li key={item.name} className={index===0?'cjycgj-item active':'cjycgj-item'} onClick={(e)=>onActive(e)}>
								<span className="cjycgj-item-name">{item.name}</span>
								<span className="cjycgj-item-value">{item.value}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
