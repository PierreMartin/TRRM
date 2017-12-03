import Course from '../models/courses';

/**
 * Get All
 */
export function all(req, res) {
	Course.find({}).exec((err, courses) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }

    return res.status(200).json(courses);
  });
}

/**
 * Add a Course
 */
export function add(req, res) {
	const description = (req.body.description) ? req.body.description : 'no description';
	const price = (req.body.price) ? req.body.price : 10;
	const query = { ...req.body, id: req.params.id, description, price };

	Course.create(query, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    return res.status(200).json({message: 'You have added a course', course: query});
  });
}

export default {
  all,
  add
};
