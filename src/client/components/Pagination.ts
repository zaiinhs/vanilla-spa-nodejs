import { state, setState } from "../state";

function Pagination() {
  const wrapperPagination = document.createElement("div");

  const buttonPrevPagination = document.createElement("button");
  buttonPrevPagination.textContent = "<--Prev";
  buttonPrevPagination.disabled = state.skipItem <= 0 || state.isLoading;

  buttonPrevPagination.onclick = () => {
    setState({ skipItem: state.skipItem - state.limitItem });
  };

  const buttonNextPagination = document.createElement("button");
  buttonNextPagination.textContent = "Next-->";
  const maxSkip = state.total - state.limitItem;

  buttonNextPagination.disabled = state.skipItem >= maxSkip || state.isLoading;

  buttonNextPagination.onclick = () => {
    setState({ skipItem: state.skipItem + state.limitItem });
  };

  const labelLimit = document.createElement("label");
  labelLimit.textContent = "Limit";
  labelLimit.style.marginLeft = "20px";

  const selectLimit = document.createElement("select");
  selectLimit.disabled = state.isLoading;
  selectLimit.onchange = (e: any) => {
    setState({ limitItem: Number(e.target.value) });
  };

  const listItem = [2, 5, 10, 20, 30];
  listItem.forEach((item: any) => {
    const optionLimit = document.createElement("option");
    optionLimit.textContent = item;
    optionLimit.value = item;
    selectLimit.appendChild(optionLimit);
  });

  selectLimit.value = state.limitItem;

  wrapperPagination.style.marginTop = "20px";

  wrapperPagination.appendChild(buttonPrevPagination);
  wrapperPagination.appendChild(buttonNextPagination);
  wrapperPagination.appendChild(labelLimit);
  wrapperPagination.append(selectLimit);
  return wrapperPagination;
}

export default Pagination;
