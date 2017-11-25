import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { typingCreateCourseAction, createCourseAction } from '../actions/courses';
import Page from '../pages/Page';
import EntryBox from '../components/EntryBox/EntryBox';
import CoursesList from '../components/coursesList/coursesList';
import classNames from 'classnames/bind';
import styles from '../css/components/vote';

const cx = classNames.bind(styles);

class Home extends Component {
	constructor(props) {
		super(props);
		this.handleChangeMessage = this.handleChangeMessage.bind(this);
		this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
	}

  getMetaData() {
    return {
      title: 'Home | react stater',
      meta: [{ name: 'description', content: 'react stater' }],
      link: []
    };
  }

	componentDidMount() {
		// ...
	}

	componentDidUpdate() {
		// ...
	}

	handleChangeMessage(event) {
		this.props.typingCreateCourseAction(event.target.value);
	}

	handleSubmitMessage(event) {
		if (event.which === 13) {
			event.preventDefault();
			this.props.createCourseAction(event.target.value.trim());
		}
	}

  render() {
		const { typingCreateCourseState, courses } = this.props;

    return (
      <Page {...this.getMetaData()}>
				<div className={cx('vote')}>
					<h1>Hello, world!</h1>

					<EntryBox
						placeholder="Write something here"
						handleChangeMessage={this.handleChangeMessage}
						handleSubmitMessage={this.handleSubmitMessage}
						value={typingCreateCourseState}
					/>

					<CoursesList courses={courses} />

				</div>
      </Page>
    );
  }
}

/*
 Home.propTypes = {
	optionalArray: PropTypes.array,
	optionalBool: PropTypes.bool,
	optionalFunc: PropTypes.func,
	optionalNumber: PropTypes.number,
	optionalObject: PropTypes.object,
	optionalString: PropTypes.string,
	optionalSymbol: PropTypes.symbol
};
*/


Home.propTypes = {
	courses: PropTypes.arrayOf.isRequired,
	typingCreateCourseAction: PropTypes.func.isRequired,
	typingCreateCourseState: PropTypes.string.isRequired,
	createCourseAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		courses: state.courses.courses,
		typingCreateCourseState: state.courses.typingCreateCourseState
	};
};

export default connect(mapStateToProps, { typingCreateCourseAction, createCourseAction })(Home);
