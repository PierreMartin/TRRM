import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const LayoutPage = ({ title, link, meta, children }) => {
  return (
    <div>
      <Helmet title={title} link={link} meta={meta} />
      { children }
    </div>
  );
};

LayoutPage.propTypes = {
  title: PropTypes.string,
  link: PropTypes.array,
  meta: PropTypes.array
};

export default LayoutPage;

