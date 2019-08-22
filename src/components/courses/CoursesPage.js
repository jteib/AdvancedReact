import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import { getVisibleCourses } from "../../redux/reducers/selectors";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import CourseFilter from "./CourseFilter";

class CoursesPage extends Component {
  state = {
    redirectToAddCoursePage: false
  };

//handleTextSearch = this.handleTextSearch.bind(this);

  componentDidMount() {
    const { courses, authors, actions } = this.props;
    if (courses.length === 0) {
      actions.loadCourses().catch(error => {
        alert("loading courses failed" + error);
      });
    }
    if (authors.length === 0) {
      actions.loadAuthors().catch(error => {
        alert("loading authors failed" + error);
      });
    }
  }

  // handleTextSearch(e) {
  //   this.props.actions.filterText(e.target.value);
  // }

  handleDeleteCourse = course => {
    toast.success("Course Deleted"); //optimistic!!
    this.props.actions.deleteCourse(course).catch(error => {
      toast.error("Delete Failed!" + error.message, { autoClose: false });
    });
  };

  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        {this.props.courses.length === 1 ? (
          <h2>{this.props.courses.length} Course</h2>
        ) : (
          <h2>{this.props.courses.length} Courses</h2>
        )}

        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
              onClick={() => this.setState({ redirectToAddCoursePage: true })}
            >
              Add Course
            </button>
            {this.props.courses.length === 0 ? (
              <h2>No Courses! Maybe try adding one?</h2>
            ) : (
              <>
                <CourseFilter />
                <CourseList
                  onDeleteClick={this.handleDeleteCourse}
                  courses={this.props.courses}
                />
              </>
            )}
          </>
        )}
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  const courses =
    state.authors.length === 0
      ? []
      : getVisibleCourses(
          state.courses.map(course => {
            return {
              ...course,
              authorName: state.authors
                .find(a => a.id === course.authorId)
                .firstName.concat(
                  " ",
                  state.authors.find(a => a.id === course.authorId).lastName
                )
            };
          }),
          state.filters
        );
  return {
    courses,
    authors: state.authors,
    //filters: state.filters,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch)
      //filterText: bindActionCreators(filterActions.filterText, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
