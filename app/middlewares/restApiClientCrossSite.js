import jsonp from 'jsonp';

class RestApiClientCrossSite {
	constructor(config) {
		this.config = config;
	}

	request(options) {
		return new Promise((resolve, reject) => {
			jsonp(this.config.baseURL + options.url, null, (err, data) => {
				if (err) {
					return reject(err.message);
				}
				return resolve(data);
			});
		});
	}
}

const restApiClientCrossSite = () => ({
	withConfig: config => new RestApiClientCrossSite(config)
});

export default restApiClientCrossSite;
