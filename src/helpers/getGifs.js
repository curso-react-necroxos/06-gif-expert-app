export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=6CzXESpms0lky0o2bGIm8ehT7HaVb4Au&q=${category}&limit=5`;
	const resp = await fetch(url);

	const { data } = await resp.json();
	return data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url,
	}));
};
