import React, { Component } from 'react';
const inf = window.require('os');
const osu = window.require('node-os-utils');

let osCmd = osu.osCmd;
let netstat = osu.netstat
 


class Net extends Component{
	constructor(props){
		super(props);

	}

	static getIp(){
		let netInfo = new Array();
		let ip = inf.networkInterfaces();
		return ip;
	}

	static getDefaultGateWay(){
		
	}

	static dataTransfer(){
		netstat.inOut()
		  .then(info => {
		    return info
		  })
	}

	static getUserName(){
		osCmd.whomi()
			.then(userName => {
				console.log(userName);
				return userName;
			})
	}
}

export default Net;