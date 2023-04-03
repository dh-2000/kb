import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import './index.scss';

export default function Index() {
	const [ time, setTime ] = useState('00:00:00');
	const [ month, setMonth ] = useState('一月');
	const [ day, setDay ] = useState(1);
	useEffect(() => {
		let timer = setInterval(() => {
			const date = new Date();
			setTime(moment(date).format('HH:mm:ss'));
			setMonth(() => {
				const mon = +moment(date).format('M');
				let mont;
				switch (mon) {
					case 1:
						mont = '一月';
						break;
					case 2:
						mont = '二月';
						break;
					case 3:
						mont = '三月';
						break;
					case 4:
						mont = '四月';
						break;
					case 5:
						mont = '五月';
						break;
					case 6:
						mont = '六月';
						break;
					case 7:
						mont = '七月';
						break;
					case 8:
						mont = '八月';
					case 9:
						mont = '九月';
						break;
					case 10:
						mont = '十月';
						break;
					case 11:
						mont = '十一';
						break;
					default:
						mont = '十二';
				}
				return mont ? mont : '一月';
			});
			setDay(moment(date).format('D'));
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);
	return (
		<div className="header">
			<div className="left-top">
				<div className="logo" />
				<div className="nav-list">
					<div className="nav-btn">
						<NavLink to="/smartpark">
							<span>智慧园区</span>
						</NavLink>
					</div>
					<div className="nav-btn">
						<NavLink to="/digitalaircraft">
							<span>数字飞机</span>
						</NavLink>
					</div>
					<div className="nav-btn">
						<NavLink to="/digitalworkshop">
							<span>数字车间</span>
						</NavLink>
					</div>
				</div>
			</div>
			<div className="right-top">
				<div className="time">
					<span>{time}</span>
				</div>
				<div className="date">
					<span>{month}</span>
					<span />
					<span>{day}</span>
				</div>
				<div className='right-top-line'></div>
				<div className="tq">
					<span>
						<iframe
							width="120"
							scrolling="no"
							height="25"
							frameborder="0"
							allowtransparency="true"
							src="https://i.tianqi.com?c=code&id=154&color=%23FFFFFF&icon=1&py=haishuqu&site=12"
						/>
					</span>
				</div>
			</div>
		</div>
	);
}
