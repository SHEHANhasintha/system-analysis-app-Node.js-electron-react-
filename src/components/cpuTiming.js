import React, { Component } from 'react';
import './cssFiles/cpuTiming.css';

const uuid = require("uuid");

class CpusTiming extends Component{

	state = {
		timing : {
			idle : this.props.cpuTiming.idle,
			irq : this.props.cpuTiming.irq,
			nice : this.props.cpuTiming.nice,
			sys : this.props.cpuTiming.sys,
			user : this.props.cpuTiming.user
		},

		eachCpuState : this.props.eachCpuState
	};


	static getDerivedStateFromProps(props){
		return {
		timing : {
			idle : props.cpuTiming.idle,
			irq : props.cpuTiming.irq,
			nice : props.cpuTiming.nice,
			sys : props.cpuTiming.sys,
			user : props.cpuTiming.user
		},
		cpuUp : (props.cpuTiming.idle+props.cpuTiming.sys+props.cpuTiming.user)/(1000*3600),
		cpuCount : props.cpuCount,
		cpus : props.cpus,
		eachCpuState : props.eachCpuState
		}
	}



	render(){
		return(
			<tr>				
						<td><span>{this.state.eachCpuState*100}%</span></td>
						<td><span>{this.state.timing.idle}</span></td>
						<td><span>{this.state.timing.irq}</span></td>
						<td><span>{this.state.timing.nice}</span></td>
						<td><span>{this.state.timing.sys}</span></td>
						<td><span>{this.state.timing.user}</span></td>
				
				
			</tr>
		)
	}
}

export default CpusTiming;










































