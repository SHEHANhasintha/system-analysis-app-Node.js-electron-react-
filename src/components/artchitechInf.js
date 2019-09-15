import React, { Component } from 'react';
import './cssFiles/artchtech.css';

const uuid = require("uuid");

class Artechitech extends Component{
	constructor(props){
		super(props);
		this.state = {
			platform : this.props.artchitechInfo.platform,
			arch : this.props.artchitechInfo.arch
		};

	}

	componentWillMount(){}


	render(){
		return(
			<div>
				<dl className="majorInfo">
					<span>Platform</span>				<span>{this.state.platform}</span>
					<span>Arch</span>					<span>{this.state.arch}</span>

				</dl>
			</div>
		);
	}
}

export default Artechitech;