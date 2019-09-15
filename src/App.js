import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SysInfoBar from './components/systemInfo.js'



const {app} = window.require('electron').remote;
const inf = window.require('os');


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
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
    }

    this.changeTotMem = this.changeTotMem.bind(this);

  }

  refresh(){
   // this.state.sysInfo.freeMem = inf.freemem();
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


  componentDidMount(){
    setInterval(() => {
      this.refresh();
    },5000);
  }

  changeTotMem(){
    this.state.sysInfo.freeMem = 11111111;
  }

  render() {
       /*setInterval(() => {
          this.refresh();
          //this.componentWillMount();
        },5000)*/
    return (
      <div className="App">
        <SysInfoBar osInfo={this.state.sysInfo} beta={this.changeTotMem} />
        }
      </div>
    );
  }
}


export default App;
