import React from "react";

function Article(props) {
  // console.log(props.post)
  return (
    <article>
      <h3>{props.post} </h3>
      <small>
        {props.date} <span> {props.minutes} min read</span>
      </small>
      <p>{props.preview}</p>
    </article>
  );
}

export default Article;
