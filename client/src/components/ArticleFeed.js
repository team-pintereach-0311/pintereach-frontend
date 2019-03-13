import React from "react";
import styled from "styled-components";
import { RemoveCircleOutline } from "styled-icons/material/RemoveCircleOutline";

const RemoveCircleOutlineRed = styled(RemoveCircleOutline)`
  color: red;
  height: 15px;
  width: 15px;
  cursor: pointer;
  padding-left: 5px;
`;

class ArticleFeed extends React.Component {
  state = {
    deletingArticle: null
  };

  // getOgs = () => {
  //   var ogs = require("open-graph-scraper");
  //   var options = {
  //     url:
  //       "https://9to5google.com/2019/03/12/google-chrome-73-mac-windows-stable/"
  //   };
  //   ogs(options)
  //     .then(function(result) {
  //       console.log("result:", result);
  //     })
  //     .catch(function(error) {
  //       console.log("error:", error);
  //     });
  // };

  deleteArticle = id => {
    this.setState({ deletingArticle: id });
    this.props.deleteArticle(id);
  };
  render() {
    console.log(this.props.articles);
    return (
      <div className="articles">
        {this.props.articles.map(article => (
          <div className="article-card" key={article.id}>
            <a href={article.link} target="_blank">
              {article.link}
            </a>
            <RemoveCircleOutlineRed
              onClick={() => this.deleteArticle(article.id)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default ArticleFeed;
