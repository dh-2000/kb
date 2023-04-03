import React from 'react';
import { Row, Col } from 'antd';
import './index.scss';
import Fkjcandcltj from '../../../components/SmartPark/aqsc/fkjcAndcltj';
import Ahbj from '../../../components/SmartPark/aqsc/ahbj';
import Abzs from '../../../components/SmartPark/aqsc/abzs';
import Tlsy from '../../../components/SmartPark/aqsc/tlsy';
import Aqhbgj from '../../../components/SmartPark/aqsc/aqhbgj';
import Wxzy from '../../../components/SmartPark/aqsc/wxzy';
import Spjk from '../../../components/SmartPark/aqsc/spjk';

export default function index() {
	return (
		<div className="aqsc">
			{/* <h1>安全生产</h1> */}
			<Row className="aqsc-content">
				<Col className="aqsc-left-content">
					<Fkjcandcltj />
					<Ahbj />
					<Abzs />
					<Tlsy />
				</Col>
				<Col className="center-content">
					<div>content</div>
				</Col>
				<Col className="right-content">
					<Aqhbgj />
					<Wxzy />
					<Spjk />
				</Col>
			</Row>
		</div>
	);
}
