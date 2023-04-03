import React from 'react';
import './index.scss';

export default function inedx() {
	const video = require('../../../../common/images/企业介绍视频.mp4')
	return (
		<div className="spjk">
			<div className="spjk-title">
				<span>视频监控</span>
			</div>
			<div className="spjk-content">
				<div className="spjk-main">
					<p className="spjk-main-name">广场监控</p>
					<div className="spjk-main-video">
						<video src={video} controls muted autoPlay loop></video>
					</div>
				</div>
				<div className="spjk-slide">
					<div className="spjk-other">
						<div className="spjk-other-name">
							<span>办公区</span>
						</div>
						<div className="spjk-other-video" >
							<video src={video} controls muted autoPlay loop></video>
						</div>
					</div>
					<div className="spjk-other">
						<div className="spjk-other-name">
							<span>施工区</span>
						</div>
						<div className="spjk-other-video" >
							<video src={video} controls muted autoPlay loop></video>
						</div>
					</div>
					<div className="spjk-other">
						<div className="spjk-other-name">
							<span>厂区空地</span>
						</div>
						<div className="spjk-other-video" >
							<video src={video} controls muted autoPlay loop></video>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
