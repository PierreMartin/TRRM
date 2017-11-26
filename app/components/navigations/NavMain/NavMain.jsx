import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from './css/navMain';

const cx = classNames.bind(styles);

const NavigationMain = () => {
	return (
		<nav role="navigation">
			<Link to="/" activeClassName={cx('active')}>Home</Link>
			<Link to="/about" activeClassName={cx('active')}>About</Link>
			<Link to="/films" activeClassName={cx('active')}>Films</Link>
		</nav>
	);
};

export default NavigationMain;