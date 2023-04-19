import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import About from "./About"
import Header from "./Header";
console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
      <Header data={blogData}/>
      <About data={blogData}/>
      <ArticleList dataList={blogData}/>
    </div>
  );
}

export default App;
