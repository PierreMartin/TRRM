import { api } from './services';
import courses from './courses.json';
import * as types from 'types';

/********************************************** Courses ***********************************************/
export const fetchCoursesRequest = (params, store) => {
	return api().getCourses()
		.then((res) => {
			if (res.status === 200) {
				store.dispatch({type: types.GET_COURSES_SUCCESS, data: res.data});
			}
		})
		.catch(() => {
			store.dispatch({type: types.GET_COURSES_FAILURE, message: 'No back-end yet', data: courses}); // no needed 'data' in real world
		});
};

export const fetchCourseRequest = (id) => {
	return api().getCourseById(id)
		.then((res) => {
			if (res.status === 200) {
				store.dispatch({type: types.GET_COURSE_SUCCESS, data: res.data});
			}
		})
		.catch((err) => {
			store.dispatch({type: types.GET_COURSE_FAILURE, message: err.message});
		});
};

export const createCourseRequest = (data) => {
	return api().createCourse(data)
		.then((res) => {
			if (res.status === 200) return Promise.resolve(res);
		})
		.catch((err) => {
			return Promise.reject(err);
		});
};

/********************************************** Third API ***********************************************/
export const getFilmsRequest = () => {
	return api().getFilms()
		.then((res) => {
			if (res.status === 200) {
				console.log(res.data);
				// store.dispatch({/* ... */});
			}
		})
		.catch((err) => {
			console.error(err);
			// store.dispatch({/* ... */});
		});
};