import React from "react";

const ArticleFeed = props => {
  return (
    <div className="articles">
      {props.articles.map(article => (
        <div className="article-card">
          <p>{article.title}</p>
          <p>{article.link}</p>
          <p>{article.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleFeed;
