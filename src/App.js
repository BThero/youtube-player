import React, { useState } from 'react';
import { Div } from './App.styled';
import { searchFetcher } from './lib/api';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import Player from './components/Player';
import useSWR from 'swr';

const App = () => {
	const [searchText, setSearchText] = useState('');
	const { data } = useSWR(searchText.length ? searchText : null, searchFetcher);
	const [videoId, setVideoId] = useState('');

	return (
		<Div>
			<Header />

			<Form
				onSubmit={(text) => {
					setSearchText(text);
				}}
			/>

			{data && (
				<List
					data={data}
					onSelect={(id) => {
						setVideoId(id);
						setSearchText('');
					}}
				/>
			)}

			{videoId && videoId.length && <Player id={videoId} />}
		</Div>
	);
};

export default App;
