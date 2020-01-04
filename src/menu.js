import React from 'react'
import styled from 'styled-components'

const Text=styled.p`
	color:white;
	margin:0;
`
const Card=styled.div`
	background:none;
	margin:50px 60px;
	font-family:'sans-serif';
	font-size:40px;
	color:#dce3e8;
	&:hover{
		color:#f2eebb;
	}
`

class Menu extends React.Component{
	render(){
		return(
			<>
				<div class="menuwrapper">
					<Card><i class="fa fa-home"></i></Card>
					<Card><i class="fa fa-search"></i></Card>
					<Card><i class="fa fa-facebook-square"></i></Card>
					<Card><i class="fa fa-github"></i></Card>
				</div>
			</>
			)
	}
}
export default Menu