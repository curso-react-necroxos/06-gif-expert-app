import { getGifs } from '../../src/helpers/getGifs';
import { fetchMock } from '../mocks/fetch.mock';

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve({ data: fetchMock }),
	})
);

describe('getGifs', () => {
	afterEach(() => fetch.mockClear());

	it('should return an array of gifs', async () => {
		const result = await getGifs('Pokemon');

		expect(result.length).toBeGreaterThan(0);
		expect(result[0]).toEqual({
			id: expect.any(String),
			title: expect.any(String),
			url: expect.any(String),
		});
	});
});
