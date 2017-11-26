import React from 'react';
import PropTypes from 'prop-types';
import FilmsNavigation from '../../navigations/FilmsNavigation/FilmsNavigation';


const LayoutFilms = ({ children }) => {
	return (
		<div>
			<FilmsNavigation />
			{children}
		</div>
	);
};

LayoutFilms.propTypes = {
	children: PropTypes.object
};

export default LayoutFilms;
