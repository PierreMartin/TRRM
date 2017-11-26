import React from 'react';
import LayoutPage from '../components/layouts/LayoutPage/LayoutPage';

const Thrillers = () => {
	function getMetaData() {
		return {
			title: 'Thrillers | react stater',
			meta: [{ name: 'description', content: 'react stater' }],
			link: []
		};
	}

	return (
		<LayoutPage {...getMetaData()}>
			<p>Thrillers</p>
		</LayoutPage>
	);
};

export default Thrillers;
