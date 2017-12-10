import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';
import classNames from 'classnames/bind';
import styles from '../../../css/main.scss';

const cx = classNames.bind(styles);

class NavigationMain extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeItem: 'thrillers'
		};

		this.handleItemClick = this.handleItemClick.bind(this);
	}

	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name });
	};

	render() {
		const { activeItem } = this.state;

		return (
			<Menu fluid vertical tabular>
				<Menu.Item as={Link} to="/films/thrillers" name='thrillers' active={activeItem === 'thrillers'} onClick={this.handleItemClick}>Thrillers</Menu.Item>
				<Menu.Item as={Link} to="/films/seriesus" name='seriesus' active={activeItem === 'seriesus'} onClick={this.handleItemClick}>SeriesUs</Menu.Item>
				<Menu.Item as={Link} to="/films/mangas" name='mangas' active={activeItem === 'mangas'} onClick={this.handleItemClick}>Mangas</Menu.Item>
			</Menu>

			/*
			 <nav role="navigation" className={cx('navigation')} >
				 <ul>
					 <li><Link to="/films/thrillers" activeClassName={cx('active')}>Thrillers</Link></li>
					 <li><Link to="/films/seriesus" activeClassName={cx('active')}>SeriesUs</Link></li>
					 <li><Link to="/films/mangas" activeClassName={cx('active')}>mangas</Link></li>
				 </ul>
			 </nav>
			 */
		);
	};
}

export default NavigationMain;
