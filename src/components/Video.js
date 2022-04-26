import React from 'react';
import { useParams } from 'react-router-dom';
import Player from './Player';
import { videoFetcher } from '../lib/api';
import useSWR from 'swr';
import { Wrapper } from './Video.styled';

const Video = () => {
	const { videoId: id } = useParams();
	const { data, error } = useSWR(id && id.length ? id : null, videoFetcher);

	return (
		<div>
			<Player id={id} />
			{error && <p>Some error</p>}
			{data && (
				<Wrapper>
					<h2>
						"{data.title}" by {data.owner}
					</h2>
					<p>{data.description}</p>
					<p>Published at {data.datePublished}</p>
				</Wrapper>
			)}
		</div>
	);
};

export default Video;
