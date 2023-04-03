import React from 'react';
import './index.scss';

export default function index() {
	return (
		<div className="aqhbgj">
			<div className="aqhbgj-title">
				<span>安全环保告警</span>
			</div>
			<div className="aqhbgj-content">
				<div>
					<div>
						<span className="aqhbgj-name">消防报警</span>
						<span className="aqhbgj-num">0</span>
					</div>
					<div>
						<span className="aqhbgj-name">危险点</span>
						<span className="aqhbgj-num">0</span>
					</div>
				</div>
				<div>
					<div>
						<span className="aqhbgj-name">污水排放</span>
						<span className="aqhbgj-num">0</span>
					</div>
					<div>
						<span className="aqhbgj-name">废气排放</span>
						<span className="aqhbgj-num">2</span>
					</div>
				</div>
				<div className="aqhbgj-tzsb">
					<span className="aqhbgj-name">特种设备证</span>
					<span className="aqhbgj-num">100%</span>
				</div>
				<div className="aqhbgj-tzsb">
					<span className="aqhbgj-name">特种作业人员持证率</span>
					<span className="aqhbgj-num">100%</span>
				</div>
			</div>
		</div>
	);
}
