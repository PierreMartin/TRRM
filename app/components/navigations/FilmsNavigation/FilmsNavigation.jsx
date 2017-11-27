import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from '../../../css/main.css';

const cx = classNames.bind(styles);

const NavigationMain = () => {
	return (
		<nav role="navigation" className={cx('navigation')} >
			<ul>
				<li><Link to="/films/thrillers" activeClassName={cx('active')}>Thrillers</Link></li>
				<li><Link to="/films/seriesus" activeClassName={cx('active')}>SeriesUs</Link></li>
				<li><Link to="/films/mangas" activeClassName={cx('active')}>mangas</Link></li>
			</ul>
		</nav>
	);
};

export default NavigationMain;
