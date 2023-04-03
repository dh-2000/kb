import React from 'react';
import './index.scss';
import Tit from '../../../helper/title';

export default function Jqdj() {
	const sbData = [
		{
			name: 'FOREST-LINE V-STAR',
			staus: 1, //0表示正常，1表示故障
			sbbh: 131000000366,
			jxrq: '09-10'
		},
		{
			name: 'FOREST-LINE V-STAR',
			staus: 0, //0表示正常，1表示故障
			sbbh: 131000000367,
			jxrq: '09-30'
		},
		{
			name: 'FOREST-LINE V-STAR',
			staus: 0, //0表示正常，1表示故障
			sbbh: 131000000366,
			jxrq: '10-10'
		},
		{
			name: 'FOREST-LINE V-STAR',
			staus: 0, //0表示正常，1表示故障
			sbbh: 131000000367,
			jxrq: '10-10'
		},
		{
			name: 'FOREST-LINE V-STAR',
			staus: 0, //0表示正常，1表示故障
			sbbh: 131000000366,
			jxrq: '10-15'
		},
		{
			name: 'FOREST-LINE V-STAR',
			staus: 0, //0表示正常，1表示故障
			sbbh: 131000000367,
			jxrq: '10-15'
		}
	];
	return (
		<div className="cnc-jqdj">
			<Tit>近期待检修设备列表</Tit>
			<div className="jqdj-main">
				{sbData.map((item,index) => {
					if (item.staus === 0) {
						//正常
						return (
							<div key={index} className="jqdj-jl">
								<div className="jqdj-jl-top">
									<span>{item.name}</span>
									<span className="jqdj-jl-name">正常</span>
								</div>
								<div className="jqdj-line">{/* <span></span> */}</div>
								<div className="jqdj-jl-bottom">
									<div className="jqdj-bh">
										<span>设备编号:</span>
										<span>{item.sbbh}</span>
									</div>
									<div className="jqdj-jxrq">
										<span>检修日期:</span>
										<span>{item.jxrq}</span>
									</div>
								</div>
							</div>
						);
					} else if (item.staus === 1) {
						//故障
						return (
							<div key={index} className="jqdj-jl-gz">
								<div className="jqdj-jl-top">
									<span>{item.name}</span>
									<span className="jqdj-jl-name-gz">故障</span>
								</div>
								<div className="jqdj-line-gz" />
								<div className="jqdj-jl-bottom">
									<div className="jqdj-bh">
										<span>设备编号:</span>
										<span>{item.sbbh}</span>
									</div>
									<div className="jqdj-jxrq">
										<span>检修日期:</span>
										<span>{item.jxrq}</span>
									</div>
								</div>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
}
