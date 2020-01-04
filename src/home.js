import React from 'react';
import 	Menu from './menu'
import './style.css'
import styled from 'styled-components'

const Button=styled.div`
	margin:15px 15px;
	width:40px;
	height:25px;
	padding:4px;
	:hover{
		cursor:pointer;	
		background:#363745;
		border-radius:4px;
	}
`
class App extends React.Component{
	state={
		open:false,
	}
	menuOpen=()=>{
		this.setState({open:true})
	}
	menuClose=()=>{
		this.setState({open:false})
	}
	render(){
		return(
				<>
				{!this.state.open &&
					<>
						<Button onClick={this.menuOpen}>
								<div class="line1"/>
								<div class="line2"/>
								<div class="line3"/>
						</Button>	
						<h1>Hi I am Tapan Manu</h1>
						<p>I am currently pursuing my Bachelors Degree in TKM</p>
					</>
				}
				{this.state.open &&
					<>
					<Button onClick={this.menuClose}>
								<div class="line1"/>
								<div class="line2"/>
								<div class="line3"/>
						</Button>	
					<Menu/>
					</>		
				}
				</>
			)
}
}
export default App

//include symbols for button using svg react