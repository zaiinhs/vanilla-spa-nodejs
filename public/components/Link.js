import { setState, render } from "../state.js";

function Link(props) {
  const link = document.createElement("a");
  link.style.marginRight = "15px";
  link.href = props.href;
  link.textContent = props.label;

  link.onclick = function (event) {
    event.preventDefault();
    const url = new URL(event.target.href);
    setState({ path: url.pathname });
    render();
  };

  return link;
}

export default Link;
