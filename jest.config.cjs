module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupFiles: ['./jest.setup.js'],
	transform: {
		'^.+\\.(j|t)sx?$': 'babel-jest',
	},
	moduleNameMapper: {
		'\\.(css|scss)$': '<rootDir>/tests/mocks/styles.mock.js',
	},
	collectCoverageFrom: [
    'src/**/*.(j|t)s*',
    '!src/**/index.js*',
    '!src/**/main.js*',
],
};
