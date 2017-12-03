import React from 'react';

const CoursesList = ({ courses }) => {
	let coursesNode = 'no yet courses';
	if (courses.length > 0) {
		coursesNode = courses.map((course, key) => {
			return (
				<li key={key}>
					<div><strong>Title: {course.title}</strong></div>
					<div>Description: {course.description}</div>
					<div>Price: {course.price}</div>
					<hr />
				</li>
			);
		});
	}

	return (
		<div>
			<h3>List of courses :</h3>

			<ul>
				{coursesNode}
			</ul>

		</div>
	);
};

export default CoursesList;