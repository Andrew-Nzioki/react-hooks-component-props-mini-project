import React from "react";
import Article from "./Article";
function ArticleList(props) {
  return (
    <main>
      {props.dataList.posts.map((article) => (
        <Article
          post={article.title}
          date={article.date}
          preview={article.preview}
          minutes={article.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;
