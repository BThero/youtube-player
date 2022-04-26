import React, { useState } from 'react';
import { Div } from './App.styled';
import { searchFetcher } from './lib/api';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import useSWR from 'swr';
import { Outlet } from 'react-router-dom';

const App = () => {
	const [searchText, setSearchText] = useState('');
	const { data } = useSWR(searchText.length ? searchText : null, searchFetcher);

	return (
		<Div>
			<Header />

			<Form
				onSubmit={(text) => {
					setSearchText(text);
				}}
			/>

			<Outlet />

			{data && (
				<List
					data={data}
					onSelect={(id) => {
						setSearchText('');
					}}
				/>
			)}
		</Div>
	);
};

export default App;
