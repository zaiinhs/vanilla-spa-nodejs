import Link from "../components/Link";
import { setState, state } from "../state";

function InputProduct() {
  const linkHome = Link({
    href: "/home",
    label: "Kembali ke Home",
  });

  const formInput = document.createElement("form");
  formInput.style.display = "table-caption";
  formInput.style.marginTop = "20px";

  const labelNameItem = document.createElement("label");
  labelNameItem.textContent = "Nama Barang";

  const inputNameItem = document.createElement("input");
  inputNameItem.placeholder = "ketik nama barang";
  inputNameItem.type = "text";

  const labelPriceItem = document.createElement("label");
  labelPriceItem.textContent = "Harga";

  const inputPriceItem = document.createElement("input");
  inputPriceItem.placeholder = "ketik harga";

  const submitItem = document.createElement("input");
  submitItem.value = "Submit";
  submitItem.type = "submit";

  formInput.addEventListener("submit", (e) => {
    e.preventDefault();

    setState({
      inputName: inputNameItem.value,
      inputPrice: inputPriceItem.value,
    });

    if (state.inputName && state.inputPrice !== "") {
      let product = {
        nameItem: state.inputName,
        priceItem: state.inputPrice,
      };

      const mergedArray = state.inputProducts.concat(product);
      setState({ inputProducts: mergedArray });
    }
  });

  const titleItem = document.createElement("h3");
  titleItem.textContent = "List barang";

  const wrapperListItem = document.createElement("ul");
  wrapperListItem.style.width = "200px";

  state.inputProducts.forEach((item, index) => {
    const wrapperItem = document.createElement("li");
    wrapperItem.style.display = "flex";
    wrapperItem.style.justifyContent = "space-between";

    const listItemName = document.createElement("p");
    listItemName.style.margin = "0";
    listItemName.textContent = item.nameItem;

    const listItemPrice = document.createElement("span");
    listItemPrice.textContent = item.priceItem;

    const deleteItem = document.createElement("button");
    deleteItem.textContent = "Hapus";
    deleteItem.onclick = () => {
      const result = state.inputProducts;
      const indexToRemove = index;

      if (indexToRemove >= 0 && indexToRemove < result.length) {
        const newArray = result.filter((obj, index) => index !== indexToRemove);

        setState({ inputProducts: newArray });
      }
    };

    wrapperListItem.appendChild(wrapperItem);
    wrapperItem.appendChild(listItemName);
    wrapperItem.appendChild(listItemPrice);
    wrapperItem.appendChild(deleteItem);
  });

  const div = document.createElement("div");
  div.append(linkHome);
  div.append(formInput);
  div.append(titleItem);
  div.append(wrapperListItem);

  formInput.appendChild(labelNameItem);
  formInput.appendChild(inputNameItem);
  formInput.appendChild(labelPriceItem);
  formInput.appendChild(inputPriceItem);
  formInput.appendChild(submitItem);
  return div;
}

export default InputProduct;
