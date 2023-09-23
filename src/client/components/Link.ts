import { setState } from "../state";

export type LinkProps = {
  href: string;
  label: string;
};

function Link(props: LinkProps) {
  const link = document.createElement("a");
  link.style.marginRight = "15px";
  link.href = props.href;
  link.textContent = props.label;

  link.onclick = function (event) {
    if (event.target instanceof HTMLLinkElement) {
      event.preventDefault();
      const url = new URL(event.target.href);
      setState({ path: url.pathname });
    }
  };

  return link;
}

export default Link;
