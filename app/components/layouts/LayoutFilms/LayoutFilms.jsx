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
			<div className="row">
				<div className="col-sm-2">
					<FilmsNavigation />
				</div>
				<div className="col-sm-10 card">
					<div className="card-body">
						{children || <p>Click on a link for display the list</p>}
					</div>
				</div>
			</div>
		</LayoutPage>
	);
};

LayoutFilms.propTypes = {
	children: PropTypes.object
};

export default LayoutFilms;
