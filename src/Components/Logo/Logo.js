import React from 'react';
import Tilt from 'react-tilt';
import SmartBrainLogo from './SmartBrainLogo.png';
import './Logo.css';


const Logo = () =>{

	return(
 		
 		<div className= 'ma4 mt0'>
 			<Tilt className='Tilt br2 shadow-2' options ={{max:35}} style={{height: 150,width:150}}>
 				<div className='Tilt-inner'><img alt= 'Logo' src={SmartBrainLogo}/></div>
 			</Tilt>
 		</div>
		)
}

export default Logo;