import React from 'react';
import { Div, Video } from './Player.styled';

const Player = ({ id }) => {
	return (
		<Div>
			<Video
				width={800}
				height={640}
				title="Youtube player"
				sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
				src={`https://youtube.com/embed/${id}?autoplay=0`}
			/>
		</Div>
	);
};

export default Player;
