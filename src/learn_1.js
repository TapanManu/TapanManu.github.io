import React from 'react';
import 	Menu from './learn_2'
import './style.css'
import Loading from './learn_3'
import About from './about'
import styled from 'styled-components'

const Hovertext=styled.div`
	color:white;
	&:hover{
		color:#121212;
		cursor:pointer;
	}
`


class App extends React.Component{
	constructor(){
		super()
		this.state={
			color:'red',
			isclicked:false,
			isloading:false,
			hover:false
		}
		//this.changeColor.bind(this)
	}
	handleHover=()=>{
		this.setState({hover:!this.state.hover})
	}
	componentDidMount(){
		setTimeout(()=>{
			this.setState({isloading:!this.state.isloading})
		},1500)
	}
	//changeColor=()=>{
	//	if(this.state.color==="red"){
	//		 this.setState({color:"blue"})
	//		}
	//	else{
	//		 this.setState({color:"red"})
	//		}
	//}
	display=()=>{
		if(this.state.isclicked){
			this.setState({isclicked:false})	
		}	
		else{
			this.setState({isclicked:true})
		}
	}
	render(){
		var disptext=this.state.hover?"I am an engineering student":"Bonjour,I am Tapan Manu";
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
				<button class="a" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
				<div class="button">
				<Hovertext>T</Hovertext>
				</div>
				</button>
				<button id="b"onClick={this.display}>
				<div class="button">
				<Hovertext>Menu</Hovertext>
					<Menu dispmenu={this.state}/>
				</div>	
				</button>
				<div class="greeting">{disptext}</div>
			</div>
			);
		}
	}
}
export default App

//include symbols for button using svg react