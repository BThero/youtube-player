export const searchFetcher = async (searchText) => {
	const url = `https://youtube.thorsteinsson.is/api/search?q=${searchText}`;
	return fetch(url).then((res) => res.json());
};

export const videoFetcher = async (videoId) => {
	const url = `https://youtube.thorsteinsson.is/api/videos/${videoId}`;
	return fetch(url).then((res) => res.json());
};

export const playlistFetcher = async (playlistId) => {
	const url = `https://youtube.thorsteinsson.is/api/playlists/${playlistId}`;
	return fetch(url).then((res) => res.json());
};

export const createPlaylist = async (playlistName) => {
	const url = `https://youtube.thorsteinsson.is/api/playlists`;

	return fetch(url, {
		method: 'POST',
		body: JSON.stringify({
			name: playlistName,
		}),
	})
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
			return res;
		});
};
