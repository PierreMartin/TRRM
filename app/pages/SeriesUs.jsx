import React from 'react';
import LayoutPage from '../components/layouts/LayoutPage/LayoutPage';

const SeriesUs = () => {
	function getMetaData() {
		return {
			title: 'SeriesUs | react stater',
			meta: [{ name: 'description', content: 'react stater' }],
			link: []
		};
	}

	return (
		<LayoutPage {...getMetaData()}>
			<p>Serie Us ...</p>
		</LayoutPage>
	);
};

export default SeriesUs;
