import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = (
  <h1 id="title" key="h1">
    Hello World from React using JSX 🚀
  </h1>
);

const HeadingComponent = () => {
  return (
    <h1 id="title" key="h1">
      Hello World from React using Functional Component  🚀
    </h1>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);