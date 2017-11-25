import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from '../css/components/navigation';

const cx = classNames.bind(styles);

const NavigationMain = () => {
    return (
      <nav role="navigation">
        <Link to="/" activeClassName={cx('active')}>React Redux Starter</Link>
        <Link to="/about" activeClassName={cx('active')}>About</Link>
      </nav>
    );
};

export default NavigationMain;
