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
			timing : timing,
			cpuUp : Math.round(((
				this.props.cpuInfo.cpus[0].times.idle+
				this.props.cpuInfo.cpus[0].times.sys+
				this.props.cpuInfo.cpus[0].times.user+
				this.props.cpuInfo.cpus[0].times.nice)/(1000*3600))*1000)/1000,
				cpuCount : this.props.cpuInfo.cpus.length
			
		};



	}


	render(){
		return(
			<div  className="cpus">
				<div className="status">
					<span>Up Time </span>		<span>{this.state.cpuUp} H</span><br/>
					<span>CPU Count</span>		<span>{this.state.cpuCount} </span>
				</div>
				
				{this.state.cpus.map((cpu)=>{
					
					
						return(

							<dl className="cpuDet" key={uuid()}>
								<h2 className="cpuCount">CPU count {this.state.cpus.indexOf(cpu)+1}</h2> 


								<table>
									<caption>CPU Details</caption>
									<tr><th>Cpu</th>			<th>Acurate cpu speed</th></tr>

									<tr><td>{cpu.model}</td>	<td>{cpu.speed} Mhz</td></tr>
									<br/>
									<tr className="cool"><th><span className="cpuTime">CPU Timing</span></th></tr>

								
<tr>					
						<th><span>cpu usage </span>	</th>			
						<th><span>Idle Time </span>	</th>			
						<th><span>Irq time </span></th>				
						<th><span>Nice </span>	</th>				
						<th><span>System time </span></th>			
						<th><span>User Time </span>	</th>

</tr>

								<CpuTiming cpuTiming={cpu.times}
								 timeStamp={this.props.timeStamp}
								  cpuCount={this.state.cpus.length}
								   cpus={this.props.cpuInfo.cpus}
								    eachCpuState={cpu.eachCpuState}/>

								 </table>

							</dl>
							);
					
						
				})}
				
			
			</div>
			)
		}
	}



export default Cpus;