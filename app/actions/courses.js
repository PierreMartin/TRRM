import * as types from './../types';
import { createCourseRequest } from './../api';


/************************ Create course ***********************/
export function typingCreateCourseAction(text) {
	return {
		type: types.TYPING_CREATE_COURSE_ACTION,
		typingCurrentValue: text
	};
}

export function createCourseSuccess(data) {
	return {
		type: types.CREATE_COURSE_SUCCESS,
		id: data.id,
		count: data.count,
		text: data.text
	};
}

export function createCourseFailure(data) {
	return {
		type: types.CREATE_COURSE_FAILURE,
		id: data.id,
		error: data.error
	};
}

export function createCourseAction(text) {
	return (dispatch/*, getState*/) => {
		if (text.trim().length <= 0) return;

		const id = new Date().getTime();
		const data = {count: 0, id, text};

		createCourseRequest(data)
			.then((res) => {
				if (res.status === 200) return dispatch(createCourseSuccess(res.data));
			})
			.catch((err) => {
				if (err.message) return dispatch(createCourseFailure({id, error: 'Something went wrong'}));
			});
	};
}
