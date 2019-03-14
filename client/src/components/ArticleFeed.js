import React from "react";
import styled from "styled-components";
import { RemoveCircleOutline } from "styled-icons/material/RemoveCircleOutline";
import axios from "axios";

const RemoveCircleOutlineRed = styled(RemoveCircleOutline)`
  color: red;
  height: 20px;
  width: 20px;
  cursor: pointer;
  padding-left: 5px;
  float: right;
`;

class ArticleFeed extends React.Component {
  state = {
    deletingArticle: null
  };

  deleteArticle = (id, user_id) => {
    this.setState({ deletingArticle: id });
    this.props.deleteArticle(id, user_id);
  };
  render() {
    console.log(this.props.articles);

    return (
      <div className="articles">
        {this.props.articles.map(article => (
          <div className="article-card" key={article.id}>
            <h3>{article.title}</h3>
            <a
              href={article.link}
              target="_blank"
              without
              rel="noopener noreferrer"
            >
              {article.link}
            </a>
            <p>@{article.postedBy}</p>
            <RemoveCircleOutlineRed
              onClick={() => this.deleteArticle(article.id, article.user_id)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default ArticleFeed;
