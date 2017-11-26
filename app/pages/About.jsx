import React from 'react';
import LayoutPage from '../components/layouts/LayoutPage/LayoutPage';

const About = () => {
	function getMetaData() {
		return {
			title: 'About | react stater',
			meta: [{ name: 'description', content: 'react stater' }],
			link: []
		};
	}

	return (
		<LayoutPage {...getMetaData()}>
			<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, doloribus non perferendis provident quaerat quod reprehenderit similique totam. Amet beatae esse eveniet ex facere, fugiat magnam minus nesciunt qui quisquam!</h2>
			<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, doloribus non perferendis provident quaerat quod reprehenderit similique totam. Amet beatae esse eveniet ex facere, fugiat magnam minus nesciunt qui quisquam!</h2>
			<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, doloribus non perferendis provident quaerat quod reprehenderit similique totam. Amet beatae esse eveniet ex facere, fugiat magnam minus nesciunt qui quisquam!</h2>
			<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, doloribus non perferendis provident quaerat quod reprehenderit similique totam. Amet beatae esse eveniet ex facere, fugiat magnam minus nesciunt qui quisquam!</h2>
		</LayoutPage>
	);
};

export default About;
