import * as types from './../types';
import { createCourseRequest } from './../api';


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
		message : res.message,
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
