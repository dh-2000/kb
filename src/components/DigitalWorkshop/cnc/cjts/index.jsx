import React from 'react';
import './index.scss';
import Tit from '../../../helper/title';

export default function Cjts() {
    const cjtsData = [
		{
			item:'开动率',
			rate:50,
			state:'+'	//+表示增长，-表示减少，o表示不变
		},
		{
			item:'OEE',
			rate:87,
			state:'+'
		},
		{
			item:'MTBE',
			rate:89,
			state:'+'
		},
		{
			item:'刀具异常消耗',
			rate:92,
			state:'+'
		},
		{
			item:'CPK',
			rate:69,
			state:'-'
		},
		{
			item:'物料配送及时率',
			rate:80,
			state:'+'
		}
	]
	return (
		<div className="cnc-cjts">
			<Tit>车间态势</Tit>
			<div className="cjts-main">
				{cjtsData.map((item) => (
					<div key={item.item} className="cjts-item">
						<div className="cjts-name">{item.item}</div>
						<div className="cjts-state">
							<span className="cjts-rate">{item.rate}</span>
							<span className="cjts-percent">%</span>
							<span className="cjts-status">{item.state === '+' ? '↑' : '↓'}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
