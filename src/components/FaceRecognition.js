import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imgUrl, box}) => {
	console.log(box);
	return (
		<div className="center-display">
			<div className="absolute">
				<img id="inputImage" className="image-size ma2" src={imgUrl} />
				<div 
					className="bounding-box"
					style={{
						top: box.topRow,
						bottom: box.bottomRow,
						left: box.leftColumn,
						right: box.rightColumn
					}}>
				</div>
			</div>
		</div>
	);
}

export default FaceRecognition;