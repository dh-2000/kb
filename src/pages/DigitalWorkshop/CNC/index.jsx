// 数控机加工
import React from 'react';
import './index.scss';
// import Tit from '../../../components/helper/title';
import Sblyl from '../../../components/DigitalWorkshop/cnc/sblyl';
import Sbgzl from '../../../components/DigitalWorkshop/cnc/sbgzl';
import Jqdj from '../../../components/DigitalWorkshop/cnc/jqdj';
import Cjts from '../../../components/DigitalWorkshop/cnc/cjts';
import Cjzypt from '../../../components/DigitalWorkshop/cnc/cjzypt';
import Cjycgj from '../../../components/DigitalWorkshop/cnc/cjycgj';
import Sbnhph from '../../../components/DigitalWorkshop/cnc/sbnhph';

export default function index() {
	
	return (
		<div className="cnc">
			{/* <h1>数控机加工</h1> */}
			<div className="cnc-main">
				<div className="cnc-left">
					<Sblyl />
					<Sbgzl />
					<Jqdj />
				</div>
				<div className="cnc-center" />
				<div className="cnc-right">
					<Cjts />
					<Cjzypt />
					<Cjycgj />
					<Sbnhph />
				</div>
			</div>
		</div>
	);
}
