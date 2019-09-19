import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SysInfoBar from './components/systemInfo.js'

import net from './libs/network.js'

import Network from './components/network.js'


//import nessary libraries
const {app} = window.require('electron').remote;
const inf = window.require('os');
const osu = window.require('node-os-utils');

class App extends Component {
  constructor(props){
    super(props);
    /*app states
      calling os module for node native information about system utils
      bring up node-os-utils for major system info

    */

    this.state = {
        sysInfo : {
          platform : inf.platform(), //system platfrom
          arch : inf.arch(),         //system artchitech
          totalMem : inf.totalmem(),  //system primary memeory in total
          freeMem : inf.freemem(),  //system free memory
          host : inf.hostname(),   //hostname in system
          cpus : inf.cpus(),        //each and every cpu information 
          release: inf.release(),  //system release info
          temp : inf.tmpdir(),    //system tempory directory
          netInterfaces : inf.networkInterfaces(),  //network devices that is being used in the system
          type : inf.type(),  
          upTime : inf.uptime(),
          userInf : inf.userInfo()
        },
        cpuUsage : this.cpuUsage(),
        eachCpuState:  [0,0]

    }

    //function bindings for child comonents to change state
    this.cpuUsage = this.cpuUsage.bind(this);
    this.network = this.network.bind(this);


  }


  //update information of the system
  refresh(){
    this.setState({
        sysInfo : {
          platform : inf.platform(),
          arch : inf.arch(),
          totalMem : inf.totalmem(),
          freeMem : inf.freemem(),
          host : inf.hostname(),
          cpus : inf.cpus(),
          release: inf.release(),
          temp : inf.tmpdir(),
          netInterfaces : inf.networkInterfaces(),
          type : inf.type(),
          upTime : inf.uptime(),
          userInf : inf.userInfo()
        }

    });

  }

  eachCpuSt(){
    let each = new Array();
    let amoCpu = this.state.sysInfo.cpus.length;
    for (let i=0;i<amoCpu;i++){
      each[i] = Math.round((1-((inf.cpus()[i].times.idle - this.state.sysInfo.cpus[i].times.idle )/1000))*1000)/1000;
    }
    this.eachCpuState = each;
     return each;
  }

  //refresh the system every second
  componentDidMount(){
    setInterval(() => {
      this.eachCpuSt();
      this.refresh();
      this.cpuUsage();
    },1000);
  }

  //get the average cpu usage
  cpuUsage(){
    let cpu = osu.cpu;
    cpu.usage()
      .then((presentage) => this.setState({
        cpuUsage : presentage
      }))

  }

  //network details
  network(){
    return net.getIp()
  }

  //rendering DOM to the screen
  render() {
    return (
      <div className="App">
        {/*jsx to load information to the child prop sysInfoBar*/}
        <SysInfoBar 
        osInfo={this.state.sysInfo}
         cpuUsage={this.state.cpuUsage}
          eachCpuState={this.eachCpuState}
          netInfo={this.network} />

        <Network netInfo={this.network}/>

      </div>
    );
  }
}


export default App;
