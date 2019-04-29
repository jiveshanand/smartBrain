import React from 'react';
import tachyons from 'tachyons';

const Navigation = ({onRouteChange, isSignedIn}) => {
	
	if(isSignedIn) {
		return(
			<div 
				style={{
					display: 'flex',
					justifyContent: 'flex-end'
				}}>
				<p 
					className="f3 link underline dim pointer pa3"
					onClick={() => onRouteChange('signIn')} >
					Sign Out
				</p>
			</div>
		);
	} else {
		return(
		<div 
			style={{
				display: 'flex',
				justifyContent: 'flex-end'
			}}>
			<p 
				className="f3 link underline dim pointer pa3"
				onClick={() => onRouteChange('signIn')} >
				Sign In
			</p>
			<p 
				className="f3 link underline dim pointer pa3"
				onClick={() => onRouteChange('register')} >
				Register
			</p>
		</div>
	);
	}
}

export default Navigation;