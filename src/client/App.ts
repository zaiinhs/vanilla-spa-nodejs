import HomeScreen from "./screens/HomePage";
import AboutScreen from "./screens/AboutPage";
import InputProduct from "./screens/InputProduct";
import FavoritePage from "./screens/FavoritePage";
// import NotFoundPage from "./screens/NotFound";
import SearchContact from "./screens/SeachContactPage";
import { state } from "./state";

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
