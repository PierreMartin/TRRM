/**
 * Get All
 */
export function all(req, res) {
	const courses = [
		{id: '1', title: 'HTML (Back-end)', description: 'HTML\'s course', price: 2},
		{id: '2', title: 'CSS (Back-end)', description: 'CSS\'s course', price: 10},
		{id: '3', title: 'JavaScript (Back-end)', description: 'JavaScript\'s course', price: 5}
	];

	return res.status(200).json(courses);
}

/**
 * Add a Course
 */
export function add(req, res) {
	const description = (req.body.description) ? req.body.description : 'no description';
	const price = (req.body.price) ? req.body.price : 10;
	const query = { ...req.body, id: req.params.id, description, price };

	return res.status(200).json({message: 'You have added a course', course: query });
}

export default {
  all,
  add
};
