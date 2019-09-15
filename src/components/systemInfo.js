import React, { Component } from 'react';
import './cssFiles/sysInfo.css';
import ArtchitechInf from './artchitechInf.js';
import MemoryInf from './memoryInfo.js';
import Cpus from './cpus.js';

const uuid = require('uuid/v1');

class SysInfoBar extends Component{

	constructor(props){
		super(props);
		this.state={
			artchitech : {
				platform : this.props.osInfo.platform,
				arch : this.props.osInfo.arch},
			memory : {
				totalMem : this.props.osInfo.totalMem,
				freeMem : this.props.osInfo.freeMem},
			user : {
				host : this.props.osInfo.host
			},
			cpu : {
				cpus : this.props.osInfo.cpus, //an array of imformation that can be map through
				release: this.props.osInfo.release,
				temp : this.props.osInfo.temp
			},
			network : {
				netInterfaces : this.props.osInfo.netInterfaces, //an array of imformation that can be map through
			},
			os : {
				type : this.props.osInfo.type,
				upTime : this.props.osInfo.upTime,
				userInf : this.props.osInfo.userInf
			}
		}

		//this.props.beta();
	}

	componentWillMount(){}

	componentWillReceiveProps(props) {
		this.setState({
			artchitech : {
				platform : this.props.osInfo.platform,
				arch : this.props.osInfo.arch},
			memory : {
				totalMem : this.props.osInfo.totalMem,
				freeMem : this.props.osInfo.freeMem},
			user : {
				host : this.props.osInfo.host
			},
			cpu : {
				cpus : this.props.osInfo.cpus, //an array of imformation that can be map through
				release: this.props.osInfo.release,
				temp : this.props.osInfo.temp
			},
			network : {
				netInterfaces : this.props.osInfo.netInterfaces, //an array of imformation that can be map through
			},
			os : {
				type : this.props.osInfo.type,
				upTime : this.props.osInfo.upTime,
				userInf : this.props.osInfo.userInf
			}
		})

	}


	render() {
		return(
			<div>
				<span className="title">system information</span>
				<div className="mainInfo" key={uuid()}>

					<ArtchitechInf artchitechInfo={this.state.artchitech}  />
					<MemoryInf memoryInfo={this.state.memory} />
					<Cpus cpuInfo={this.state.cpu} />

					


				</div>
			</div>
			);
	}
}

export default SysInfoBar;