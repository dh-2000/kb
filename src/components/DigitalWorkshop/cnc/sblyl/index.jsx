import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import './index.scss';
import Tit from '../../../helper/title';

export default function Index() {
  const sbName = ['FOREST-LINE V-STAR','大友佳','DIAMOND','DIDIA','小帕帕斯'];
  const sbValue = [60,40,50,70,80];

  function getLength(){
    let maxL = 4;
    for (let i = 0; i < sbName.length; i++) {
      if(maxL > sbName[i].length){
        continue;
      }else {
        maxL = sbName[i].length;
      }  
    }
    return  -maxL*2 + '%';
  }

    useEffect(()=>{
        initSblylChart();
    },[])
    function initSblylChart(){
        var chartDom = document.getElementById('sblyl-chart');
        var myChart = echarts.init(chartDom);
        var option;
        let len = getLength() || '-10%';
        
        option = {
            // height:150,
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // Use axis to trigger tooltip
              type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
          },
          // legend: {},
          grid: {
            top: '8%',
            left: len,
            right: '12%',
            bottom: '0%',
            containLabel: true
          },
          xAxis: {
            name:'%',
            nameTextStyle:{
              color:'#fff',
              verticalAlign:'bottom',
              padding: [ 0, 15, -20, 0 ]
            },
            type: 'value',
            splitLine:{
              lineStyle:{
                // type:'dashed',
                color:'#ffffff50'
              }
            },
            max: 100,
            axisLabel:{
              color:'#A5E6FF',
            },
            axisLine:{
              show:true,
              lineStyle:{
                color:'#ffffff50'
              }
            }
            
          },
          yAxis: {
            type: 'category',
            inverse: true,
            data: sbName,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            // axisLine:{
            //   show:true
            // },
        
            axisLabel: {
              color: '#B2DEE8',
              verticalAlign: 'bottom',
              align: 'left',
              padding: [0, 0, 8, 15]
            }
          },
          series: [
            {
              type: 'bar',
              barWidth:8,
              label: {
                show: true,
                position: 'right',
                color:'#fff',
                formatter: function(item){
                    return item.value+'%'
                  }
              },
              itemStyle: {
                color:new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                          offset: 0,
                          color: '#0181ff20'
                        },{
                          offset: 1,
                          color: '#0181ff'
                        }])
              },
              data: sbValue,
            }
          ]
        };
        
        option && myChart.setOption(option);
    }
	return (
		<div className="cnc-sblyl">
			<Tit>设备利用率</Tit>
            <div className='sblyl-main'>
                <div id='sblyl-chart' style={{width:'100%',height:'180px'}}></div>
            </div>
		</div>
	);
}
