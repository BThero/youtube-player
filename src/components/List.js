import React from 'react';
import { UL, LI, Div } from './List.styled';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const List = ({ data, onSelect }) => {
	const { videoId } = useParams();

	return (
		<UL>
			<p>{videoId}</p>
			{data.map((item) => (
				<LI key={item.id.videoId} active={item.id.videoId === videoId}>
					<header>
						<Link to={`/${item.id.videoId}`}>
							<h2>{item.title}</h2>
						</Link>
					</header>
					<Div>
						<span>Duration: {item.duration_raw}</span>
						<span>Views: {item.views}</span>
					</Div>
				</LI>
			))}
		</UL>
	);
};

export default List;
