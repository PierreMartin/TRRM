import { courses } from '../controllers';

export default (app) => {
	// courses routes
	if (courses) {
		app.get('/api/getcourses', courses.all);
		app.post('/api/addcourse/:id', courses.add);
	} else {
		console.warn('courses routes');
	}

};
