import React, { Component } from 'react';
import './cssFiles/cpus.css';
import CpuTiming from './cpuTiming.js';

const uuid = require("uuid");

class Cpus extends Component{
	constructor(props){
		super(props);
		//console.log(this.props.cpuInfo);

		let timing =  this.props.cpuInfo.cpus.map((models) => {
			return models.times;
		})

		this.state = {
			cpus : this.props.cpuInfo.cpus,
			timing : timing
		};



	}

	componentWillMount(){}

	render(){
		return(
			<div>
				{this.state.cpus.map((cpu)=>{
					
						return(

							<dl className="cpuDet" key={uuid()}>
								<h2 className="cpuCount">CPU count {this.state.cpus.indexOf(cpu)+1}</h2> 
								<dt className="mainInfo cpuname">
										<span>Cpu </span>					<span>{cpu.model}</span>
										<span>Acurate cpu speed </span>		<span>{cpu.speed} Mhz</span>
								</dt>

								<CpuTiming cpuTiming={cpu.times} />



							</dl>
							);
						
				})}
			
			</div>
			)
		}
	}



export default Cpus;