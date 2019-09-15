import React, { Component } from 'react';
import './cssFiles/cpuTiming.css';

const uuid = require("uuid");

class CpusTiming extends Component{
	constructor(props){
		super(props);
		this.state = {
			timing : this.props.cpuTiming
		};

	}

	componentWillMount(){}


	render(){
		return(
			<div>				
				<h3 className="cpuTime">CPU Timing</h3> 
				<dt className="mainInfo cputime">
						<span>Idle Time </span>				<span>{this.state.timing.idle}</span>
						<span>Irq time </span>				<span>{this.state.timing.irq}</span>
						<span>Nice </span>					<span>{this.state.timing.nice}</span>
						<span>System time </span>			<span>{this.state.timing.sys}</span>
						<span>User Time </span>				<span>{this.state.timing.user}</span>
				</dt>
			</div>
		)
	}
}

export default CpusTiming;











































