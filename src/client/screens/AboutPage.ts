import Link from "../components/Link";

function AboutScreen() {
  const linkHome = Link({
    href: "/home",
    label: "Kembali ke Home",
  });

  const textAbout = document.createElement("h1");
  textAbout.textContent = "Ini Halaman About";

  const div = document.createElement("div");
  div.append(linkHome);
  div.append(textAbout);

  return div;
}

export default AboutScreen;
