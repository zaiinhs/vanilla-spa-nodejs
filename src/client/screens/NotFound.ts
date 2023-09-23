import Link from "../components/Link";

function NotFoundPage() {
  const linkHome = Link({
    href: "/home",
    label: "Kembali ke Home",
  });

  const title = document.createElement("h1");
  title.textContent = "Not Found Page";

  const div = document.createElement("div");

  div.append(linkHome);
  div.append(title);
  return div;
}
export default NotFoundPage;
