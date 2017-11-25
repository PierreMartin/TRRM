import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Navigation from '../containers/Navigation';
import styles from '../css/main';

const cx = classNames.bind(styles);


const App = ({ children }) => {
  return (
    <div className={cx('app')}>
      <Navigation />
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
