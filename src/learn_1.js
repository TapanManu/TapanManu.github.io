import React from 'react';
import 	Menu from './learn_2'
import './style.css'
import Icon from './transparent.png'

class Car extends React.Component{
	constructor(){
		super()
		this.state={
			color:'red',
			isclicked:false
		}
		this.changeColor.bind(this)
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
		const bcg_color=this.state.color==="red"?"#5c2b2b":"#394475";
		return(
			<div class="big" style={{background:bcg_color}}>
				<button class="a"onClick={this.changeColor}>Change</button>
				<button id="b"onClick={this.display}>
				<div class="button">
				<text>Menu</text>
					<Menu dispmenu={this.state}/>
				</div>	
				</button>
				<h1 style={{color:"whitesmoke"}}>This site is Under Construction and to learn!</h1>
			</div>
			)
	}
}
export default Car

//include symbols for button using svg react