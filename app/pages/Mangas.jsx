import React from 'react';
import LayoutPage from '../components/layouts/LayoutPage/LayoutPage';

const Mangas = () => {
	function getMetaData() {
		return {
			title: 'Mangas | react stater',
			meta: [{ name: 'description', content: 'react stater' }],
			link: []
		};
	}

	return (
		<LayoutPage {...getMetaData()}>
			<p>Mangas</p>
		</LayoutPage>
	);
};

export default Mangas;
