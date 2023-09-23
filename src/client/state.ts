import App from "./App";
import { Product } from "./typings/products";

export interface State {
  inputValue: string;
  path: string;
  products: Product[];
  limitItem: number;
  skipItem: number;
  total: number;
  isLoading: boolean;
  errorMessage: string;
}

let state: State = {
  inputValue: localStorage.getItem("inputValue") ?? "",
  path: location.pathname,
  products: [],
  limitItem: 5,
  skipItem: 0,
  total: 0,
  isLoading: false,
  errorMessage: "",
};

function setState(newState: Partial<State>) {
  const prevState = { ...state };
  const nextState = { ...state, ...newState };
  state = nextState;
  render();
  onStateChange(prevState, nextState);
}

let timer;
// Ini adalah sideEffect, dimana sebuah function yg akan dijalankan ketika state nya berubah
function onStateChange(prevState: State, nextState: State) {
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
          errorMessage: error.message,
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
  const focusedElementId = document.activeElement?.id;

  const focusedElementSelectionStart =
    document.activeElement instanceof HTMLInputElement
      ? document.activeElement.selectionStart
      : null;

  const focusedElementSelectionEnd =
    document.activeElement instanceof HTMLInputElement
      ? document.activeElement.selectionEnd
      : null;

  const root = document.getElementById("root");
  const app = App();

  if (root !== null) {
    root.innerHTML = "";
    root.append(app);

    if (focusedElementId) {
      const focusedElement = document.getElementById(focusedElementId);
      focusedElement?.focus();

      if (
        focusedElement !== null &&
        focusedElement instanceof HTMLInputElement
      ) {
        focusedElement.selectionStart = focusedElementSelectionStart;
        focusedElement.selectionEnd = focusedElementSelectionEnd;
      }
    }
  }
}

export { state, setState, onStateChange, render };
