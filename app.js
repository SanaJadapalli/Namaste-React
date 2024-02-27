const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", { id: "childsh2" }, "parent-chile-h2"),
    React.createElement("h3", { id: "childsh2" }, "parent-chile-h3"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", { id: "childsh233" }, "parent-chile-h2222"),
    React.createElement("h3", { id: "childsh233" }, "parent-chile-h33333"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
const header = React.createElement(
  "h1",
  {
    id: "header",
  },
  "Hello from React!"
);
console.log(header);
root.render(parent);
