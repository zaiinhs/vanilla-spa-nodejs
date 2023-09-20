import NavBar from "../components/Navbar";
import Pagination from "../components/Pagination";
import ProductInput from "../components/ProductInput";
import ProductList from "../components/ProductList";

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
