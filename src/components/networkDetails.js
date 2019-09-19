import React, { Component } from 'react';
import './cssFiles/network.css';
import  { Fragment } from 'react';



const Wide = (item) => {
	return(
    <Fragment>
    	<span>gfgf</span>
    </Fragment>
  )
}

class NetDetails extends Component{
	state = {
		netInf : this.props.mapping,

	};




	static getDerivedStateFromProps(props,state){
		let status;
		
		status = props.mapping;

		console.log(status)

		return {
		netInf : {
			net : status
			 
			}
		}
	}


	listItem({ item }) {
		
	  return (

	    <Fragment>
	      <span>{item}</span>
	    </Fragment>
	  )
		
	}

	ListItem = (props) => {
		props.update();
	}

	render(){
		return(
			<div>
				<div className="container">
					<dl className="shape">
				{/*////////////////////////////*/}
					<dt  className="craft">
						<span>Address</span>
					</dt>
						{this.state.netInf.net.map((curr) => {
							return(
								<Fragment>
										<dt  className="craft">
										<span> {curr.address}</span>
										</dt>
								</Fragment>
								)
						}
						)}
					</dl>
				{/*////////////////////////////*/}
					<dl className="shape">
					<dt  className="craft">
						<span>cidr</span>
					</dt>
						{this.state.netInf.net.map((curr) => {
							return(
								<Fragment >
										<dt  className="craft">
										<span> {curr.cidr}</span>
										</dt>
								</Fragment>
								)
						}
						)}
					</dl>
				{/*////////////////////////////*/}
					<dl className="shape">
					<dt  className="craft">
						<span>family</span>
					</dt>
						{this.state.netInf.net.map((curr) => {
							return(
								<Fragment >
										<dt  className="craft">
										<span> {curr.family}</span>
										</dt>
								</Fragment>
								)
						}
						)}
					</dl>
				{/*////////////////////////////*/}
					<dl className="shape">
					<dt  className="craft">
						<span>mac</span>
					</dt>
						{this.state.netInf.net.map((curr) => {
							return(
								<Fragment >
										<dt  className="craft">
										<span> {curr.mac}</span>
										</dt>
								</Fragment>
								)
						}
						)}
					</dl>
				{/*////////////////////////////*/}
					<dl className="shape">
					<dt  className="craft">
						<span>netmask</span>
					</dt>
						{this.state.netInf.net.map((curr) => {
							return(
								<Fragment >
										<dt  className="craft">
										<span> {curr.netmask}</span>
										</dt>
								</Fragment>
								)
						}
						)}
					</dl>
				</div>	
			
			</div>
		)
	}




}




export default NetDetails;