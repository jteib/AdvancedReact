import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";
import { getBySlug } from "../../redux/reducers/selectors";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

const ManageCoursePage = ({ history, match }) => {
  const dispatch = useDispatch();
  const redux = useSelector(state => {
    const slug = match.params.slug;
    const course =
      slug && state.courses.length > 0
        ? getBySlug(state.courses, slug)
        : newCourse;
    return {
      course,
      courses: state.courses,
      authors: state.authors,
      loading: state.apiCallsInProgress > 0
    };
  });

  const { authors, courses } = redux;
  const [course, setCourse] = useState({ ...redux.course });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (courses.length === 0) {
      dispatch(loadCourses()).catch(error => {
        alert("Loading courses failed" + error);
      });
    }

    if (authors.length === 0) {
      dispatch(loadAuthors()).catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }, [course]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }));
  }

  const formIsValid = () => {
    const { title, added, authorId, category } = course;
    const errors = {};

    if (!title) errors.title = "Title is required.";
    if (!added) errors.added = "Publishing year is required.";
    if (!authorId) errors.author = "Author is required.";
    if (!category) errors.category = "Category is required.";

    setErrors(errors);
    //Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  };

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    dispatch(saveCourse(course))
      .then(() => {
        toast.success("Course Saved");
        history.push("/courses");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return authors.length === 0 && courses.length === 0 ? (
    <Spinner />
  ) : (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
};

ManageCoursePage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default ManageCoursePage;
