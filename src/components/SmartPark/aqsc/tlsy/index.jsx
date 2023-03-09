import React from 'react';
import './index.scss';


export default function index() {
	const wxd = require('../../../../common/images/wxd.png');
	const fq = require('../../../../common/images/fq.png');
	const ws = require('../../../../common/images/ws.png');
	return (
		<div className="tlsy">
			<div className="tlsy-title">
				<span>图例</span>
				<span>示意</span>
			</div>
			<div className='tlsy-line'></div>
			<div className="tlsy-list">
				<div>
					<span className="tlsy-icon">
					<img src={wxd}></img>
					</span>
					<span>危险点</span>
				</div>
				<div>
					<span className="tlsy-icon">
						<img src={fq}></img>
					</span>
					<span>废气排放点</span>
				</div>
				<div>
					<span className="tlsy-icon">
						<img src={ws}></img>
					</span>
					<span>污水排放点</span>
				</div>
			</div>
		</div>
	);
}
