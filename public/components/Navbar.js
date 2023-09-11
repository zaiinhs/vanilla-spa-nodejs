import Link from "./Link.js";

function NavBar() {
  const linkHome = Link({
    href: "/home",
    label: "Home",
  });
  const linkInputProduct = Link({
    href: "/input-product",
    label: "Input Product",
  });

  const linkAbout = Link({
    href: "/about",
    label: "About",
  });

  const div = document.createElement("div");
  div.append(linkHome);
  div.append(linkAbout);
  div.append(linkInputProduct);

  return div;
}

export default NavBar;
