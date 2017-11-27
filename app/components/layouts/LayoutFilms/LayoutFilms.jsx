import React from 'react';
import PropTypes from 'prop-types';
import LayoutPage from '../LayoutPage/LayoutPage';
import FilmsNavigation from '../../navigations/FilmsNavigation/FilmsNavigation';

const LayoutFilms = ({ children }) => {
	function getMetaData() {
		return {
			title: 'Films Categories | react stater',
			meta: [{ name: 'description', content: 'react stater' }],
			link: []
		};
	}

	return (
		<LayoutPage {...getMetaData()}>
			<FilmsNavigation />
			{children || <p>Click on a link for display the list</p>}
		</LayoutPage>
	);
};

LayoutFilms.propTypes = {
	children: PropTypes.object
};

export default LayoutFilms;
