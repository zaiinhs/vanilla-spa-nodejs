import HomeScreen from "./screens/HomePage.js";
import AboutScreen from "./screens/AboutPage.js";
import { state } from "./state.js";

function App() {
  const homeScreen = HomeScreen();
  const aboutScreen = AboutScreen();

  if (state.path === "/home") {
    return homeScreen;
  } else if (state.path === "/about") {
    return aboutScreen;
  } else {
    return homeScreen;
  }
}

export default App;
