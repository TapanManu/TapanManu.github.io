import React from 'react'

function Menu(props){
		if(props.dispmenu.isclicked){
			return(
				<div class="ent1">
				<div class="ent"></div>
				<div class="menu">
					<div class="header_menu">
						<text class="menutext">MENU</text>
						
						<ul>
							<li>Home</li>
							<hr style={{color:"yellow"}}/>
							<li>Contact</li>
							<hr style={{color:"yellow"}}/>
							<li>Github</li>
						</ul>	
					</div>
				</div>
				</div>
				) 
			}
		return null;	
	}
export default Menu