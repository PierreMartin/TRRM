import * as types from './../types';
import { createCourseRequest, fetchMusicsRequest } from './../api';


/************************ Create course ***********************/
export function typingCreateCourseAction(text) {
	return {
		type: types.TYPING_CREATE_COURSE_ACTION,
		typingCurrentValue: text
	};
}

export function createCourseSuccess(res) {
	return {
		type: types.CREATE_COURSE_SUCCESS,
		message: res.message,
		data: res.course
	};
}

export function createCourseFailure(data) {
	return {
		type: types.CREATE_COURSE_FAILURE,
		id: data.id,
		error: data.error
	};
}

export function createCourseAction(title) {
	return (dispatch/*, getState*/) => {
		if (title.trim().length <= 0) return;

		const id = new Date().getTime();
		const data = {id, title};

		createCourseRequest(data)
			.then((res) => {
				if (res.status === 200) return dispatch(createCourseSuccess(res.data));
			})
			.catch((err) => {
				if (err.message) return dispatch(createCourseFailure({id, error: 'Something went wrong'}));
			});
	};
}


/************************ Third API (should be in other file's action) ***********************/
// Action from a component because datas are fetched in a search input
export function fetchMusicsAction(query) {
	return (/*dispatch*/) => {
		if (query.trim().length <= 0) return;

		fetchMusicsRequest(query)
			.then((res) => {
			console.log(res.data);
				// if (res.data) return dispatch(getMusicsSuccess(res.data));
			})
			.catch((err) => {
			console.error(err.message);
				// if (err.message) return dispatch(getMusicFailure({error: err.message, id: query}));
			});
	};
}
