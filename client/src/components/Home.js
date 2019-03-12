import React from "react";
import { getData } from "../actions";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

class Home extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    if (this.props.fetchingArticles) {
      return <Loader type="TailSpin" color="blue" height={80} width={80} />;
    }
    return (
      <div className="step-3">
        <p>Home is working</p>
      </div>
    );
  }
}

const mapStateToProps = ({ articles, fetchingArticles }) => ({
  articles,
  fetchingArticles
});

export default connect(
  mapStateToProps,
  { getData }
)(Home);
