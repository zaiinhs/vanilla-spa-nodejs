import HomeScreen from "./screens/HomePage";
import AboutScreen from "./screens/AboutPage";
// import NotFoundPage from "./screens/NotFound";
import { state } from "./state";

function App() {
  const homeScreen = HomeScreen();
  const aboutScreen = AboutScreen();
  // const notFoundScreen = NotFoundPage();

  if (state.path == "/home") {
    return homeScreen;
  } else if (state.path == "/about") {
    return aboutScreen;
  } else {
    return homeScreen;
  }
}

export default App;
