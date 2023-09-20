import { state, setState } from "../state";

function ProductInput() {
  const input = document.createElement("input");
  input.id = "input";
  input.value = state.inputValue;
  input.oninput = function (event) {
    // @ts-ignore
    setState({ inputValue: event.target.value });
  };
  input.placeholder = "Input your name";

  const buttonClear = document.createElement("button");
  buttonClear.disabled = state.isLoading;
  buttonClear.textContent = "Clear";
  buttonClear.onclick = function () {
    setState({ inputValue: "" });
  };

  const div = document.createElement("div");

  div.append(input);
  div.append(buttonClear);
  return div;
}

export default ProductInput;
