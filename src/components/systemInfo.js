import React, { Component } from 'react';
import './cssFiles/sysInfo.css';
import ArtchitechInf from './artchitechInf.js';
import MemoryInf from './memoryInfo.js';
import Cpus from './cpus.js';
import CpuUsage from './cpuUsage.js'

const uuid = require('uuid/v1');

class SysInfoBar extends Component{

		state={
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
			},
			cpuUsage : {
				cpuUsage : this.props.cpuUsage
			}
		}


	static getDerivedStateFromProps(props, state) {
		//console.log(props.eachCpuState());
	    // Return null if the state hasn't changed
	    let increment = 0;
	    props.osInfo.cpus.map((cp) => {
	    	//console.log(props.eachCpuState)
	    	try{
	    	cp.eachCpuState = props.eachCpuState[increment]
	    	increment += 1;
	    	}catch(e){
	    		
	    	}
	    })
	    increment = 0;
	    return 	{		
	    	artchitech : {
				platform : props.osInfo.platform,
				arch : props.osInfo.arch},
			memory : {
				totalMem : props.osInfo.totalMem,
				freeMem : props.osInfo.freeMem},
			user : {
				host : props.osInfo.host
			},
			cpu : {
				cpus : props.osInfo.cpus, //an array of imformation that can be map through
				release: props.osInfo.release,
				temp : props.osInfo.temp

			},
			network : {
				netInterfaces : props.osInfo.netInterfaces, //an array of imformation that can be map through
			},
			os : {
				type : props.osInfo.type,
				upTime : props.osInfo.upTime,
				userInf : props.osInfo.userInf
			},
			cpuUsage : {
				cpuUsage : props.cpuUsage
			},
			eachCpuState : props.eachCpuState}
  }






	render() {
		return(
			<div>
				<span className="title">system information</span>
				<div className="mainInfo" key={uuid()}>
					<CpuUsage className="CpuUsage" cpuUsage={this.state.cpuUsage.cpuUsage} />
					<ArtchitechInf className="ArtchitechInf" artchitechInfo={this.state.artchitech}  />
					<MemoryInf className="MemoryInf" memoryInfo={this.state.memory} />
					<Cpus className="Cpus" 
					cpuInfo={this.state.cpu}
					 timeStamp={this.state.timeStamp}
					  eachCpuState={this.props.eachCpuState}/>
					

					


				</div>
			</div>
			);
	}
}

export default SysInfoBar;