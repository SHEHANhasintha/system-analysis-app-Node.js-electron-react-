import React, { Component } from 'react';
import './cssFiles/network.css';
import NetDetails from './networkDetails.js'

const uuid = require("uuid");


class Network extends Component{
	state = {
		netInf : this.props.netInfo,

	};


	static getDerivedStateFromProps(props,state){
		let status;
		status = props.netInfo();

		//console.log(Object.keys(status))

		return {
		netInf : {
			net : status
			 
			}
		}
	}



	render(){
		return(
			<div>
								
				{
					Object.keys(this.state.netInf.net).map((item) => {
					return (
						<div className='network' key={uuid()}>
							<span>{item}</span>
							<div>
								<NetDetails mapping={this.state.netInf.net[item]}/>
							

							
						
							</div>
						</div>
						)	
				})
			}
			</div>
		)
	}


}

export default Network;