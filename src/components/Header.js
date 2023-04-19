import React from "react";

function Header(props) {
  const placeholder = "https://via.placeholder.com/215";
  return (
    <div>
      <h1>{props.data.name}</h1>
    </div>
  );
}

export default Header;
