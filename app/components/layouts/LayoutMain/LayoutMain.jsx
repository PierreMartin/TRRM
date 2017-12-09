import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import NavMain from '../../navigations/NavMain/NavMain';
import styles from '../../../css/main.scss';

const cx = classNames.bind(styles);


const App = ({ children }) => {
  return (
    <div className={cx('container', 'app')}>
      <NavMain />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
