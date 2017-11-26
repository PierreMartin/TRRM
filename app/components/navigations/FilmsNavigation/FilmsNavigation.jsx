import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from '../../../css/main.css';

const cx = classNames.bind(styles);

const NavigationMain = () => {
	return (
		<nav role="navigation" className={cx('navigation')} >
			<Link to="films/thrillers" activeClassName={cx('active')}>Thrillers</Link>
			<Link to="films/seriesus" activeClassName={cx('active')}>SeriesUs</Link>
			<Link to="films/mangas" activeClassName={cx('active')}>mangas</Link>
		</nav>
	);
};

export default NavigationMain;
