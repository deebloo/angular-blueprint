const FILES = require('./build/FILES');

module.exports = {
	context: __dirname,
	resolve: {
		root: [
			`${__dirname}/`,
			`${__dirname}/src`,
			`${__dirname}/src/common`,
			`${__dirname}/src/app`,
			`${__dirname}/src/app/views`,
			`${__dirname}/src/app/components`,
			`${__dirname}/src/app/services`
		]
	},
	entry: `${FILES.src}/bootstrap.js`,
	output: {
		path: `${FILES.dev}/scripts`,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
            },
			{
				test: /\.(html)$/,
				loader: 'raw',
				exclude: /node_modules/
			}
        ]
	}
};