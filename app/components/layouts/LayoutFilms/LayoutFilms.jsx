import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Segment } from 'semantic-ui-react';
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
			<Segment vertical>
				<Grid container style={{height: '500px'}}>
					<Grid.Column mobile={16} tablet={4} computer={4}>
						<FilmsNavigation />
					</Grid.Column>

					<Grid.Column stretched mobile={16} tablet={12} computer={12}>
						<Segment>
							{children || <p>Click on a link for display the list</p>}
						</Segment>
					</Grid.Column>
				</Grid>
			</Segment>
		</LayoutPage>
	);
};

LayoutFilms.propTypes = {
	children: PropTypes.object
};

export default LayoutFilms;
