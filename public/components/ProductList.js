import { state } from "../state.js";

function ProductList() {
  const titleProduct = document.createElement("ul");
  titleProduct.textContent = "Daftar Produk";
  titleProduct.style.fontSize = "20px";

  if (state.isLoading) {
    const titleProductInfo = document.createElement("h1");
    titleProductInfo.textContent = "Loading...";
    titleProduct.append(titleProductInfo);
  } else if (state.errorMessage !== "") {
    const titleProductInfo = document.createElement("h1");
    titleProductInfo.textContent = state.errorMessage;
    titleProduct.append(titleProductInfo);
  } else if (state.products.length === 0) {
    const titleProductInfo = document.createElement("h1");
    titleProductInfo.textContent = "produk tidak ada";
    titleProduct.append(titleProductInfo);
  } else {
    state.products.forEach((item) => {
      const titleProductList = document.createElement("li");
      titleProductList.textContent = item.title;

      const categoryProduct = document.createElement("span");
      categoryProduct.textContent = item.category;
      titleProduct.append(titleProductList);
      titleProduct.append(categoryProduct);
    });
  }

  const div = document.createElement("div");
  div.append(titleProduct);
  return div;
}

export default ProductList;
