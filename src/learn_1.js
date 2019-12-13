import React from 'react';
import 	Menu from './learn_2'
import './style.css'
import Loading from './learn_3'


class App extends React.Component{
	constructor(){
		super()
		this.state={
			color:'red',
			isclicked:false,
			isloading:false
		}
		this.changeColor.bind(this)
	}
	componentDidMount(){
		setTimeout(()=>{
			this.setState({isloading:!this.state.isloading})
		},1500)
	}
	changeColor=()=>{
		if(this.state.color==="red"){
			 this.setState({color:"blue"})
			}
		else{
			 this.setState({color:"red"})
			}
	}
	display=()=>{
		if(this.state.isclicked){
			this.setState({isclicked:false})	
		}	
		else{
			this.setState({isclicked:true})
		}
	}
	render(){
		if(!this.state.isloading===true)
		{
			return(
			<Loading/>
			)
		}
		else
		{	
		return(
			<div class="big" >
				<button class="a"onClick={this.changeColor}><b>T</b></button>
				<button id="b"onClick={this.display}>
				<div class="button">
				<text>Menu</text>
					<Menu dispmenu={this.state}/>
				</div>	
				</button>
				<div class="greeting">Bonjour! I am Tapan Manu</div>
			</div>
			);
		}
	}
}
export default App

//include symbols for button using svg react