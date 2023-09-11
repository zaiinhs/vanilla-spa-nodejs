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

  const linkFavorite = Link({
    href: "/favorite",
    label: "Favorite",
  });

  const linkSearchContact = Link({
    href: "/search-contact",
    label: "Search Contact",
  });

  const linkAbout = Link({
    href: "/about",
    label: "About",
  });

  const div = document.createElement("div");
  div.append(linkHome);
  div.append(linkAbout);
  div.append(linkInputProduct);
  div.append(linkSearchContact);
  div.append(linkFavorite);

  return div;
}

export default NavBar;
