import React from 'react';
import tachyons from 'tachyons';
import './linkForm.css';

const ImageLinkForm = ({onInputChange, onButtonClick}) => {
	return (
		<div>
			<p className="f3 center-display" >
				{'This Magic Brain will detect faces'}
			</p>
			<div className="center-display ">
				<div className="form pa4 br3 shadow-3"> 
				<input
					className="f4 pa2 w-70 center"
					type="text"
					onChange={onInputChange} />
				<button 
					className="link f4 w-30 grow pb3 pv2 dib white bg-light-purple"
					onClick={onButtonClick}>
					Detect
				</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;
