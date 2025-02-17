const domContainer = document.querySelector("#like_button_container");
const root = ReactDOM.createRoot(domContainer);

root.render(
  React.createElement(
    "button",
    { onClick: () => this.setState({ liked: true }) },
    "Like"
  )
);

// root.render(
//   <button onClick={() => this.setState({ liked: true })}>Like</button>
// );
