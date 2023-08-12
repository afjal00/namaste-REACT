/**
 *
 * <div id="parent">
 *
 *      <div id="child">
 *      <h1>I'm h1 tag</h1>
 *      <h2>I'm h2 tag</h2> // if we want to make siblings in the structure then we have to do or make an array in react
 *      </div>
 *
 * </div>
 *
 *
 */


// Note : Complex Nested example 

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an H1 tag"),
    React.createElement("h2", {}, "I'm an H2 tag"),
    React.createElement("h3", {}, "I'm an H3 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an H1 tag"),
    React.createElement("h2", {}, "I'm an H2 tag"),
    React.createElement("h3", {}, "I'm an H3 tag"),
  ]) ]
); // this is the example for nested components in react



// this is JSX
// this is the simpler method to write tags in React




const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world using React!"
);

// here this is inside the curly braces is the method by which you can give attributes to you headings link h1 etc.

const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading); // it will give js object

console.log(parent); // it is also an another object

// root.render(heading);
root.render(parent);
