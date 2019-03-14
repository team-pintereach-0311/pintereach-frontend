import React from "react";

class BoardFeed extends React.Component {
  render() {
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
          </div>
        ))}
      </div>
    );
  }
}

export default BoardFeed;
