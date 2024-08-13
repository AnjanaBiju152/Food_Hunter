import React from "react";
import ReactDOM from "react-dom/client";


const container = React.createElement(
  "h1",
  { id: "heading1" },
  "React"
);
console.log(container);

const jsxConatiner = (
  <h1 className="heading1">React using jsx</h1>
);
const HeadingComponents = () => (
  <div id="container">
    <h1>React functional component</h1>;
  </div>
);

const WithoutReturn = () => (
  <div>
    <h1>I am here without Return</h1>
  </div>
)

const WithReturn = () => {
  return (
    <div>
      <h1>I am here with Return</h1>
    </div>
  )
}

const reactElement = (
  <h1>I am a React Element</h1>
)

const Component = () => { 
  return(
  <div id="container1">
    <h1> component composition </h1>
  </div>
)}
const ReactComponent = () => (
  <div id="container2">
  <Component/>
    <h1>I am a React component</h1>
  </div>
)



const reactEle = (
  <div>
  {reactElement}
    <h1>React Element</h1>
  </div>
)
const ReactComp = () => {
  return (
    <div>
      
      {ReactComponent()}
      {<h1>Heading inside curly braces</h1>}
      <h1>{reactEle} inside React Component</h1>
      {`I am any Javascript expression ${2+2}`}
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ReactComp/>);