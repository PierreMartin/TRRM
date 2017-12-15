import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Item } from 'semantic-ui-react';
import itemImage from '../../images/image.png';

const CoursesList = ({ courses }) => {
	let coursesNode = 'no yet courses';
	if (courses.length > 0) {
		coursesNode = courses.map((course, key) => {
			return (
				<Item key={key} style={{ marginBottom: '40px' }}>
					<Item.Image size="small" src={itemImage} />

					<Item.Content>
						<Item.Header as="a" style={{ fontSize: '1.4em' }}>{course.title}</Item.Header>
						<Item.Meta><span className="price">${course.price} </span><span className="stay">1 Month</span></Item.Meta>
						<Item.Description>{course.description} - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores, exercitationem expedita fuga ipsum, molestias mollitia nam natus nisi nobis ...</Item.Description>
						<Item.Extra><Icon color="green" name="check" /> 121 Votes</Item.Extra>

						<Button basic color="red" content="Buy" icon="shopping cart" label={{ as: 'a', basic: true, color: 'red', pointing: 'left', content: `${course.price} $` }} />
					</Item.Content>
				</Item>
			);
		});
	}

	return (
		<div>
			<h3>List of courses :</h3>
			<Item.Group>
				{coursesNode}
			</Item.Group>
		</div>
	);
};

CoursesList.propTypes = {
	courses: PropTypes.arrayOf(PropTypes.shape({
		description: PropTypes.string,
		id: PropTypes.string,
		price: PropTypes.number,
		title: PropTypes.string
	})).isRequired
};

export default CoursesList;
