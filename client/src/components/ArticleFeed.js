import React from "react";

function ArticleFeed(props) {
  // state = {
  //   data: "hello"
  // };

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
  // render() {
  return (
    <div className="articles">
      {props.articles.map(article => (
        <div className="article-card" key={article.id}>
          <a href={article.link}>link</a>
        </div>
      ))}
    </div>
  );
}

export default ArticleFeed;
