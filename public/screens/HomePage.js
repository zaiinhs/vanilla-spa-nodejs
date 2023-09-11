import NavBar from "../components/Navbar.js";
import Pagination from "../components/Pagination.js";
import ProductInput from "../components/ProductInput.js";
import ProductList from "../components/ProductList.js";

function HomeScreen() {
  const navbar = NavBar();
  const textPreview = document.createElement("p");
  textPreview.textContent = "Cari product Anda :";

  const div = document.createElement("div");

  div.append(navbar);
  div.append(textPreview);
  div.append(ProductInput());
  div.append(Pagination());
  div.append(ProductList());

  return div;
}

export default HomeScreen;
