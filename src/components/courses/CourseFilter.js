import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as filterActions from "../../redux/actions/filterActions";

class CourseFilters extends React.Component {
  filterYear = this.filterYear.bind(this);

  filterYear() {
    const { actions } = this.props;
    let start = +this.startYear.value !== 0 ? +this.startYear.value : undefined;
    let end = +this.endYear.value !== 0 ? +this.endYear.value : undefined;
    actions.startYear(start);
    actions.endYear(end);
  }

  render() {
    return (
      <div style={{ marginBottom: 15 }}>
        <input
          type="text"
          placeholder="search"
          onChange={e => {
            this.props.actions.filterText(e.target.value);
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

CourseFilters.propTypes = {
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      filterText: bindActionCreators(filterActions.filterText, dispatch),
      startYear: bindActionCreators(filterActions.startYear, dispatch),
      endYear: bindActionCreators(filterActions.endYear, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseFilters);
