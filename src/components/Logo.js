import React from 'react';
import Tilt from 'react-tilt'
import tachyons from 'tachyons';
import './logo.css';
import brain from '../images/logo.jpg';

const Logo = () => {
	return (
		<div className="ma4 mt0">
			<Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner">
					<img src={brain} />
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;
