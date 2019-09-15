import React, { Component } from 'react';
import './cssFiles/memoryInf.css';

const uuid = require("uuid");

class Memory extends Component{
	constructor(props){
		super(props);
		this.state = {
			totalMem : this.props.memoryInfo.totalMem,
			freeMem : this.props.memoryInfo.freeMem
		};


	}

	//mount updated status in to the state and render updated DOM
	componentWillMount(){}



	render(){
		return(
			<div>
				<dl className="majorInfo">

					<span>Total Memory</span>			<span>{this.state.totalMem}</span>
					<span>Free memory space</span>		<span>{this.state.freeMem}</span>
				</dl>
			</div>
		);
	}
}



export default Memory;