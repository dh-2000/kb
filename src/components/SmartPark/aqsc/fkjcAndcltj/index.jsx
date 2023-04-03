import React from 'react';
import './index.scss';

export default function index() {
	const qiche = require('../../../../common/images/qiche.png');
	const renyuan = require('../../../../common/images/renyuan.png');
	return (
		<div className="aqsc-left-top">
			<div className="fkjc-card">
				<div className="fkjc-top">
					<span className="fkjc-name">访客进出</span>
					<span className="fkjc-unit">个</span>
				</div>
				<div className="fkjc-content">
					<span className="fkjc-icon iconfont icon-lianxiren">
						<img src={renyuan}></img>
					</span>
					<span className="fkjc-num">40/139</span>
				</div>
			</div>
			<div className="cltj-card">
				<div className="cltj-top">
					<span className="cltj-name">车辆统计</span>
					<span className="cltj-unit">个</span>
				</div>
				<div className="cltj-content">
					<span className="cltj-icon iconfont icon-4qiche">
						<img src={qiche}></img>
					</span>
					<span className="cltj-num">13/42</span>
				</div>
			</div>
		</div>
	);
}
