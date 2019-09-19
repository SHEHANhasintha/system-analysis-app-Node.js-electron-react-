import React, { Component } from 'react';
import './cssFiles/cpuUsage.css';

class CpuUsage extends Component{
	constructor(props){
		super(props);
		//console.log(this.props.cpuInfo);



		this.state = {
			cpuUsage : this.props.cpuUsage,
		};



	}


	render(){
		return(
			<div>
					<div className="cpuUsage" >
						<h3 className="cpuUsage">CPU usage</h3> 
						<span>{this.state.cpuUsage} %</span>
					</div>
			</div>
			)
		}
	}



export default CpuUsage;