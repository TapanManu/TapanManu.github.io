import styled from 'styled-components'


export const Box=styled.div`
	display:block;
	background:pink;
	width:200px;
	height:200px;
	z-index:5250;
	transition:transform 300ms ease-in-out;

	&:hover{
		transform:translate(200px,150px) rotate(20deg);
	}

`

export default Box

