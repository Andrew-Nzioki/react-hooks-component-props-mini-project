import React from "react";

function Article({post,date='January 1, 1970', preview, minutes}) {
  let readTimeEmoji='';
  if(minutes<30){
  const coffeeCups = Math.ceil(minutes / 5);
  readTimeEmoji = "☕️".repeat(coffeeCups);
  
}else if(minutes>=30){
  const coffeeCups = Math.ceil(minutes / 10);
  readTimeEmoji = "🍱".repeat(coffeeCups);
}
  return (
    <article>
      <h3>{post} </h3>
      <small>
        {date}, <span> {minutes} {readTimeEmoji} min read</span>
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
