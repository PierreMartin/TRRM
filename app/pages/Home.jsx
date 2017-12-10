import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';
import { typingCreateCourseAction, createCourseAction } from '../actions/courses';
import LayoutPage from '../components/layouts/LayoutPage/LayoutPage';
import EntryBox from '../components/EntryBox/EntryBox';
import CoursesList from '../components/CoursesList/CoursesList';
import classNames from 'classnames/bind';
import styles from './css/home.scss';

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
      <LayoutPage {...this.getMetaData()}>
				<Segment inverted textAlign='center' style={{ minHeight: 400, padding: '1em 0em' }} vertical>
					<Container text>
						<Header as='h1' content='Hello, world!' inverted className={cx('myClass')} style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em' }}/>
						<Header as='h2' content='Do whatever you want when you want to.' inverted style={{ fontSize: '1.7em', fontWeight: 'normal' }}/>
						<Button primary size='huge'>Get Started<Icon name='right arrow' /></Button>
					</Container>
				</Segment>

				<Segment textAlign='center' vertical>
					<Container text>
						<EntryBox
							placeholder="Write something here"
							handleChangeMessage={this.handleChangeMessage}
							handleSubmitMessage={this.handleSubmitMessage}
							value={typingCreateCourseState}
						/>
					</Container>
				</Segment>

				<Segment vertical>
					<Container text>
						<CoursesList courses={courses} />
					</Container>
				</Segment>

      </LayoutPage>
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
