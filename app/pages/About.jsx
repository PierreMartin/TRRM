import React, { Component } from 'react';
import LayoutPage from '../components/layouts/LayoutPage/LayoutPage';


class About extends Component {
	getMetaData() {
		return {
			title: 'About | react stater',
			meta: [{ name: 'description', content: 'react stater' }],
			link: []
		};
	}

  render() {
    return (
      <LayoutPage {...this.getMetaData()}>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, doloribus non perferendis provident quaerat quod reprehenderit similique totam. Amet beatae esse eveniet ex facere, fugiat magnam minus nesciunt qui quisquam!</h2>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, doloribus non perferendis provident quaerat quod reprehenderit similique totam. Amet beatae esse eveniet ex facere, fugiat magnam minus nesciunt qui quisquam!</h2>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, doloribus non perferendis provident quaerat quod reprehenderit similique totam. Amet beatae esse eveniet ex facere, fugiat magnam minus nesciunt qui quisquam!</h2>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, doloribus non perferendis provident quaerat quod reprehenderit similique totam. Amet beatae esse eveniet ex facere, fugiat magnam minus nesciunt qui quisquam!</h2>
      </LayoutPage>
    );
  }
}

export default About;
