import React from 'react';
import LayoutPage from '../components/layouts/LayoutPage/LayoutPage';
import LayoutFilms from '../components/layouts/LayoutFilms/LayoutFilms';


const FilmsCategories = () => {
	function getMetaData() {
		return {
			title: 'Films Categories | react stater',
			meta: [{ name: 'description', content: 'react stater' }],
			link: []
		};
	}

	return (
		<LayoutPage {...getMetaData()}>
			<p>Films Categories</p>
			<LayoutFilms />
		</LayoutPage>
	);
};

export default FilmsCategories;
