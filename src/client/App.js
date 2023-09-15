import HomeScreen from "./screens/HomePage.js";
import AboutScreen from "./screens/AboutPage.js";
import InputProduct from "./screens/InputProduct.js";
import FavoritePage from "./screens/FavoritePage.js";
// import NotFoundPage from "./screens/NotFound.js";
import SearchContact from "./screens/SeachContactPage.js";
import { state } from "./state.js";

function App() {
  const homeScreen = HomeScreen();
  const aboutScreen = AboutScreen();
  const inputProductScreen = InputProduct();
  const favoriteScreen = FavoritePage();
  const searchContactScreen = SearchContact();
  // const notFoundScreen = NotFoundPage();

  if (state.path == "/home") {
    return homeScreen;
  } else if (state.path == "/input-product") {
    return inputProductScreen;
  } else if (state.path == "/favorite") {
    return favoriteScreen;
  } else if (state.path == "/search-contact") {
    return searchContactScreen;
  } else if (state.path == "/about") {
    return aboutScreen;
  } else {
    return homeScreen;
  }
}

export default App;
