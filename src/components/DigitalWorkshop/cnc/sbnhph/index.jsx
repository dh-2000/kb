import React, { useEffect } from 'react';
import './index.scss';
import Tit from '../../../helper/title';

export default function Sbnhph() {
    const sz = require('../../../../common/images/sz.png');
    const data = [
        {
            index:'NO.01',
            name:'大友佳',
            value:10
        },{
            index:'NO.02',
            name:'DIAMOND',
            value:9
        },{
            index:'NO.03',
            name:'大帕帕斯',
            value:7
        },{
            index:'NO.04',
            name:'米超力',
            value:5
        },{
            index:'NO.05',
            name:'小友佳',
            value:4.5
        }
    ];
    let timer;
    function addActive(){
        timer = setInterval(()=>{
            const activeNode = document.querySelector('.sbnh-item.active');
            const nodeList = document.querySelector('.sbnh-list').children;
            const activeIndex = Array.prototype.indexOf.call(nodeList,activeNode);
            activeNode.classList.remove('active');
            if(activeIndex < nodeList.length-1){
                nodeList[activeIndex+1].classList.add('active');
            }else {
                nodeList[0].classList.add('active');
            }
        },3000)
    }
    function selectActive(e){
        const activeNode = document.querySelector('.sbnh-item.active');
        // const nodeList = document.querySelector('.sbnh-list').children;
        // const activeIndex = Array.prototype.indexOf.call(nodeList,activeNode);
        const selectNode = e.currentTarget;
        // const selectIndex = Array.prototype.indexOf.call(nodeList,selectIndex);
        if(activeNode === selectNode){
            return
        }else {
            activeNode.classList.remove('active');
            selectNode.classList.add('active');
        }
    }
    useEffect(()=>{
        addActive();
        return ()=>{
            if(timer){
                clearInterval(timer);
            }
        }
    },[])
	return (
		<div className="cnc-sbnhph">
			<Tit>设备能耗排行</Tit>
            <div className='sbnhph-main'>
                <ul className='sbnh-list'>
                    {
                        data.map((item,index)=>(
                            <li className={index===0?'sbnh-item active':'sbnh-item'} key={index} onClick={e=>selectActive(e)}>
                                <div className='sbnh-img'>
                                    <img src={sz} alt="" />
                                </div>
                                <span className='sbnh-index'>{item.index}</span>
                                <span className='sbnh-name'>{item.name}</span>
                                <span className='sbnh-value'>{item.value + 'kw'}</span>
                            </li>
                        ))
                    }
                </ul>
                <div className='sbnh-line'>
                    {
                        data.map((item)=>(
                            <div className="sbnh-line-box" key={item.index}>
                                <div className="sbnh-line1"></div>
                                <div className="sbnh-line2"></div>
                                <div className="sbnh-line3"></div>
                                <div className="sbnh-line4"></div>
                                <div className="sbnh-line5"></div>
                            </div>
                        ))
                    }
                </div>
            </div>
		</div>
	);
}
