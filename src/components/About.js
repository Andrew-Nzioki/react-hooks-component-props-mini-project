import React from "react";

function About(props) {
  console.log(props);
  return (
    <div>
      <aside>
        <img
          src={props.data.image}
          alt="blog
    logo"
        />
        <p>{props.data.about}</p>
      </aside>
    </div>
  );
}

export default About;
