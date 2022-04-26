import React from 'react';
import { UL, LI, Div } from './List.styled';

const List = ({ data, onSelect }) => {
	return (
		<UL>
			{data.map((item) => (
				<LI
					onClick={(e) => {
						e.preventDefault();
						onSelect(item.id.videoId);
					}}
				>
					<header>
						<h2>{item.title}</h2>
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
