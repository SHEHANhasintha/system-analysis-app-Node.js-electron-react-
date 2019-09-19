import React, { Component } from 'react';
import './cssFiles/memoryInf.css';

const uuid = require("uuid");

class Memory extends Component{
	constructor(props){
		super(props);
		this.state = {
			totalMem : this.props.memoryInfo.totalMem,
			freeMemory : this.props.memoryInfo.freeMem,
			freeMem : {
				freeMemAsPresent : null,
				freeMemAsinGB : null	
			}
		};


	}

	//mount updated status in to the state and render updated DOM
	componentWillMount(){
		this.setState({
			totalMem : (function(totalMemory) {return Math.round((totalMemory/(1024*1024*1024))*1000)/1000})(this.props.memoryInfo.totalMem),
			freeMem : {
					freeMemAsPresent : (function(currentMemory,totalMemory) {return Math.round((((totalMemory-currentMemory)/totalMemory)*100)*100)/100})(this.props.memoryInfo.freeMem,this.props.memoryInfo.totalMem),
					freeMemAsinGB : ((currentMemory) => {return Math.round((currentMemory / (1024*1024*1024))*10000)/10000})(this.props.memoryInfo.freeMem)
				}
		})
	}


	render(){
		return(
			<div>
				<dl className="majorInfo">

					<span>Total Memory</span>			<span>{this.state.totalMem} GB</span>
					<span>Free memory space in presentage</span>		<span>{this.state.freeMem.freeMemAsPresent} %</span>
					<span>Free memory space in GB</span>		<span>{this.state.freeMem.freeMemAsinGB} GB</span>
				</dl>
			</div>
		);
	}
}



export default Memory;