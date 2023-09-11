import App from "./App.js";
let state = {
  inputValue: localStorage.getItem("inputValue") ?? "",
  path: location.pathname,
  products: [],
  limitItem: 5,
  skipItem: 0,
  total: 0,
  isLoading: false,
  errorMessage: "",
  inputProducts: JSON.parse(localStorage.getItem("productItem")) || [],
  inputPrice: "",
  inputName: "",
};

function setState(newState) {
  const prevState = { ...state };
  const nextState = { ...state, ...newState };
  state = nextState;
  render();
  onStateChange(prevState, nextState);
}

// Ini adalah sideEffect, dimana sebuah function yg akan dijalankan ketika state nya berubah
function onStateChange(prevState, nextState) {
  if (prevState.inputProducts !== nextState.inputProducts) {
    localStorage.setItem(
      "productItem",
      JSON.stringify(nextState.inputProducts)
    );
  }

  if (prevState.inputValue !== nextState.inputValue) {
    setState({ skipItem: 0 });
  }

  if (
    prevState.inputValue !== nextState.inputValue ||
    prevState.skipItem !== nextState.skipItem ||
    prevState.limitItem !== nextState.limitItem
  ) {
    localStorage.setItem("inputValue", nextState.inputValue);
    const PRODUCT_JSON_API = `https://dummyjson.com/products/search?limit=${nextState.limitItem}&skip=${nextState.skipItem}&select=title,category&q=${nextState.inputValue}`;

    setState({ isLoading: true });

    fetch(PRODUCT_JSON_API)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject({
            status: response.status,
          });
        }
      })
      .then((json) => {
        const dataProducts = json.products;
        setState({
          products: dataProducts,
          total: json.total,
          errorMessage: "",
          isLoading: false,
        });
      })
      .catch((error) => {
        setState({
          errorMessage: "error fetching",
          isLoading: false,
          products: [],
        });
      });
  }

  if (prevState.path !== nextState.path) {
    history.pushState(null, "", nextState.path);
  }
}

function render() {
  const root = document.getElementById("root");
  const app = App();

  const focusedElementId = document.activeElement.id;
  const focusedElementSelectionStart = document.activeElement.selectionStart;
  const focusedElementSelectionEnd = document.activeElement.selectionEnd;

  root.innerHTML = "";
  root.append(app);
  if (focusedElementId) {
    const focusedElement = document.getElementById(focusedElementId);
    focusedElement.focus();
    focusedElement.selectionStart = focusedElementSelectionStart;
    focusedElement.selectionEnd = focusedElementSelectionEnd;
  }
}

export { state, setState, onStateChange, render };
