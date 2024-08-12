import React from "react";
import ReactDOM from "react-dom/client";
const p = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello I am heading 1 from React"),
    React.createElement("h2", {}, "Hello I am heading 2 from React"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello I am heading 1 from React"),
    React.createElement("h2", {}, "Hello I am heading 2 from React"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(p);