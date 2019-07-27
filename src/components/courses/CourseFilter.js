import React from "react";
import { connect } from "react-redux";
import {
  filterText,
  startYear,
  endYear
} from "../../redux/actions/filterActions";

class CourseFilters extends React.Component {
  constructor(props) {
    super(props);
    this.filterYear = this.filterYear.bind(this);
  }

  filterYear() {
    let start = +this.startYear.value !== 0 ? +this.startYear.value : undefined;
    let end = +this.endYear.value !== 0 ? +this.endYear.value : undefined;
    this.props.dispatch(startYear(start));
    this.props.dispatch(endYear(end));
  }

  render() {
    return (
      <div style={{ marginBottom: 15 }}>
        <input
          type="text"
          placeholder="search"
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(filterText(e.target.value));
          }}
        />
        <br />
        <br />

        <input
          type="number"
          placeholder="startYear"
          style={{ width: 80 }}
          ref={el => (this.startYear = el)}
        />
        <input
          type="number"
          placeholder="endYear"
          style={{ width: 80 }}
          ref={el => (this.endYear = el)}
        />

        <button onClick={this.filterYear}>up</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(CourseFilters);
