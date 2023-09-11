import HomeScreen from "./screens/HomePage.js";
import AboutScreen from "./screens/AboutPage.js";
import { state } from "./state.js";
import InputProduct from "./screens/InputProduct.js";

function App() {
  const homeScreen = HomeScreen();
  const aboutScreen = AboutScreen();
  const inputProductScreen = InputProduct();

  if (state.path === "/home") {
    return homeScreen;
  } else if (state.path === "/input-product") {
    return inputProductScreen;
  } else if (state.path === "/about") {
    return aboutScreen;
  } else {
    return homeScreen;
  }
}

export default App;
