import React, { Component } from "react";
import { connect } from "react-redux";
import { getUnresolvedBugs, loadBugs, resolveBug } from "../store/bugs";
class Bugs extends Component {
  componentDidMount() {
    this.props.loadBugs();
  }
  render() {
    return (
      <ul>
        {this.props.bugs.map((bug) => (
          <li key={bug.id}>
            {bug.description}
            <button onClick={() => this.props.resoveBug(bug.id)}>
              Resolve
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
// bugs: state.entities.bugs.list
const mapStateToProps = (state) => ({
  bugs: getUnresolvedBugs(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadBugs: () => dispatch(loadBugs()),
  resoveBug: (id) => dispatch(resolveBug(id)),
});

// container
// Presentation (Bugs)
export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
