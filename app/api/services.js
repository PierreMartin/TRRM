import restApiClient from './../middlewares/restApiClient';
import restApiClientCrossSite from './../middlewares/restApiClientCrossSite';

export function api() {
	const localhostEndpoint = 'http://localhost:3000';
	const deezerEndpoint = 'https://api.deezer.com';

	const localClient = restApiClient().withConfig({ baseURL: localhostEndpoint });
	const deezerClient = restApiClientCrossSite().withConfig({ baseURL: deezerEndpoint });

	return {
		// Courses :
		getCourses: () => localClient.request({
			method: 'GET',
			url: '/api/getcourses'
		}),
		getCourseById: id => localClient.request({
			method: 'GET',
			url: '/api/getcourse/' + id
		}),
		createCourse: data => localClient.request({
			method: 'POST',
			url: '/api/addcourse/' + data.id,
			data
		}),
		deleteCourse: id => localClient.request({
			method: 'DELETE',
			url: '/api/course/' + id
		}),
		updateCourse: (id, data) => localClient.request({
			method: 'PUT',
			url: '/api/course/' + id,
			data
		}),
		// Musics (example with deezer API) :
		getMusics: query => deezerClient.request({
			// method: 'GET',
			url: '/search?q=' + query + '&output=jsonp'
		})
	};
}
