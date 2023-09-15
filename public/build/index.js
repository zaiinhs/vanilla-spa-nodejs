/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _screens_HomePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/HomePage.js */ \"./src/client/screens/HomePage.js\");\n/* harmony import */ var _screens_AboutPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/AboutPage.js */ \"./src/client/screens/AboutPage.js\");\n/* harmony import */ var _screens_InputProduct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/InputProduct.js */ \"./src/client/screens/InputProduct.js\");\n/* harmony import */ var _screens_FavoritePage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/FavoritePage.js */ \"./src/client/screens/FavoritePage.js\");\n/* harmony import */ var _screens_NotFound_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/NotFound.js */ \"./src/client/screens/NotFound.js\");\n/* harmony import */ var _screens_SeachContactPage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens/SeachContactPage.js */ \"./src/client/screens/SeachContactPage.js\");\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state.js */ \"./src/client/state.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction App() {\r\n  const homeScreen = (0,_screens_HomePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  const aboutScreen = (0,_screens_AboutPage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  const inputProductScreen = (0,_screens_InputProduct_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  const favoriteScreen = (0,_screens_FavoritePage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  const searchContactScreen = (0,_screens_SeachContactPage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n  const notFoundScreen = (0,_screens_NotFound_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\r\n  if (_state_js__WEBPACK_IMPORTED_MODULE_6__.state.path == \"/home\") {\r\n    return homeScreen;\r\n  } else if (_state_js__WEBPACK_IMPORTED_MODULE_6__.state.path == \"/input-product\") {\r\n    return inputProductScreen;\r\n  } else if (_state_js__WEBPACK_IMPORTED_MODULE_6__.state.path == \"/favorite\") {\r\n    return favoriteScreen;\r\n  } else if (_state_js__WEBPACK_IMPORTED_MODULE_6__.state.path == \"/search-contact\") {\r\n    return searchContactScreen;\r\n  } else if (_state_js__WEBPACK_IMPORTED_MODULE_6__.state.path == \"/about\") {\r\n    return aboutScreen;\r\n  } else if (_state_js__WEBPACK_IMPORTED_MODULE_6__.state.path == \"*\") {\r\n    return notFoundScreen;\r\n  } else {\r\n    return homeScreen;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\r\n\n\n//# sourceURL=webpack://spa-nodejs/./src/client/App.js?");

/***/ }),

/***/ "./src/client/components/ContactListItem.js":
/*!**************************************************!*\
  !*** ./src/client/components/ContactListItem.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state.js */ \"./src/client/state.js\");\n\r\n\r\nfunction ContactListItem(props) {\r\n  const name = document.createElement(\"p\");\r\n  name.textContent = `${props.firstName} ${props.maidenName} ${props.lastName}`;\r\n\r\n  const email = document.createElement(\"p\");\r\n  email.textContent = props.email;\r\n\r\n  const addFavoriteButton = document.createElement(\"button\");\r\n  addFavoriteButton.textContent = \"add to favorite\";\r\n  addFavoriteButton.onclick = function () {\r\n    const favoriteContacts = _state_js__WEBPACK_IMPORTED_MODULE_0__.state.favoriteContacts.concat({\r\n      id: props.id,\r\n      firstName: props.firstName,\r\n      lastName: props.lastName,\r\n      maidenName: props.maidenName,\r\n      email: props.email,\r\n    });\r\n    (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setState)({ favoriteContacts });\r\n  };\r\n\r\n  const removeFavoriteButton = document.createElement(\"button\");\r\n  removeFavoriteButton.textContent = \"remove from favorite\";\r\n  removeFavoriteButton.onclick = function () {\r\n    const favoriteContacts = _state_js__WEBPACK_IMPORTED_MODULE_0__.state.favoriteContacts.filter(\r\n      ({ id }) => id != props.id\r\n    );\r\n    (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setState)({ favoriteContacts });\r\n  };\r\n\r\n  const isFavorite = _state_js__WEBPACK_IMPORTED_MODULE_0__.state.favoriteContacts.some(({ id }) => props.id === id);\r\n\r\n  const item = document.createElement(\"li\");\r\n  item.appendChild(name);\r\n  item.appendChild(email);\r\n  item.appendChild(isFavorite ? removeFavoriteButton : addFavoriteButton);\r\n\r\n  return item;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactListItem);\r\n\n\n//# sourceURL=webpack://spa-nodejs/./src/client/components/ContactListItem.js?");

/***/ }),

/***/ "./src/client/components/Link.js":
/*!***************************************!*\
  !*** ./src/client/components/Link.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state.js */ \"./src/client/state.js\");\n\r\n\r\nfunction Link(props) {\r\n  const link = document.createElement(\"a\");\r\n  link.style.marginRight = \"15px\";\r\n  link.href = props.href;\r\n  link.textContent = props.label;\r\n\r\n  link.onclick = function (event) {\r\n    event.preventDefault();\r\n    const url = new URL(event.target.href);\r\n    (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setState)({ path: url.pathname });\r\n    (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.render)();\r\n  };\r\n\r\n  return link;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);\r\n\n\n//# sourceURL=webpack://spa-nodejs/./src/client/components/Link.js?");

/***/ }),

/***/ "./src/client/components/Navbar.js":
/*!*****************************************!*\
  !*** ./src/client/components/Navbar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Link.js */ \"./src/client/components/Link.js\");\n\r\n\r\nfunction NavBar() {\r\n  const linkHome = (0,_Link_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    href: \"/home\",\r\n    label: \"Home\",\r\n  });\r\n\r\n  const linkInputProduct = (0,_Link_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    href: \"/input-product\",\r\n    label: \"Input Product\",\r\n  });\r\n\r\n  const linkFavorite = (0,_Link_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    href: \"/favorite\",\r\n    label: \"Favorite\",\r\n  });\r\n\r\n  const linkSearchContact = (0,_Link_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    href: \"/search-contact\",\r\n    label: \"Search Contact\",\r\n  });\r\n\r\n  const linkAbout = (0,_Link_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    href: \"/about\",\r\n    label: \"About\",\r\n  });\r\n\r\n  const div = document.createElement(\"div\");\r\n  div.append(linkHome);\r\n  div.append(linkAbout);\r\n  div.append(linkInputProduct);\r\n  div.append(linkSearchContact);\r\n  div.append(linkFavorite);\r\n\r\n  return div;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);\r\n\n\n//# sourceURL=webpack://spa-nodejs/./src/client/components/Navbar.js?");

/***/ }),

/***/ "./src/client/components/Pagination.js":
/*!*********************************************!*\
  !*** ./src/client/components/Pagination.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state.js */ \"./src/client/state.js\");\n\r\n\r\nfunction Pagination() {\r\n  const wrapperPagination = document.createElement(\"div\");\r\n\r\n  const buttonPrevPagination = document.createElement(\"button\");\r\n  buttonPrevPagination.textContent = \"<--Prev\";\r\n  buttonPrevPagination.disabled = _state_js__WEBPACK_IMPORTED_MODULE_0__.state.skipItem <= 0 || _state_js__WEBPACK_IMPORTED_MODULE_0__.state.isLoading;\r\n\r\n  buttonPrevPagination.onclick = () => {\r\n    (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setState)({ skipItem: _state_js__WEBPACK_IMPORTED_MODULE_0__.state.skipItem - _state_js__WEBPACK_IMPORTED_MODULE_0__.state.limitItem });\r\n  };\r\n\r\n  const buttonNextPagination = document.createElement(\"button\");\r\n  buttonNextPagination.textContent = \"Next-->\";\r\n  const maxSkip = _state_js__WEBPACK_IMPORTED_MODULE_0__.state.total - _state_js__WEBPACK_IMPORTED_MODULE_0__.state.limitItem;\r\n\r\n  buttonNextPagination.disabled = _state_js__WEBPACK_IMPORTED_MODULE_0__.state.skipItem >= maxSkip || _state_js__WEBPACK_IMPORTED_MODULE_0__.state.isLoading;\r\n\r\n  buttonNextPagination.onclick = () => {\r\n    (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setState)({ skipItem: _state_js__WEBPACK_IMPORTED_MODULE_0__.state.skipItem + _state_js__WEBPACK_IMPORTED_MODULE_0__.state.limitItem });\r\n  };\r\n\r\n  const labelLimit = document.createElement(\"label\");\r\n  labelLimit.textContent = \"Limit\";\r\n  labelLimit.style.marginLeft = \"20px\";\r\n\r\n  const selectLimit = document.createElement(\"select\");\r\n  selectLimit.disabled = _state_js__WEBPACK_IMPORTED_MODULE_0__.state.isLoading;\r\n  selectLimit.onchange = (e) => {\r\n    (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setState)({ limitItem: Number(e.target.value) });\r\n  };\r\n\r\n  const listItem = [2, 5, 10, 20, 30];\r\n  listItem.forEach((item) => {\r\n    const optionLimit = document.createElement(\"option\");\r\n    optionLimit.textContent = item;\r\n    optionLimit.value = item;\r\n    selectLimit.appendChild(optionLimit);\r\n  });\r\n\r\n  selectLimit.value = _state_js__WEBPACK_IMPORTED_MODULE_0__.state.limitItem;\r\n\r\n  wrapperPagination.style.marginTop = \"20px\";\r\n\r\n  wrapperPagination.appendChild(buttonPrevPagination);\r\n  wrapperPagination.appendChild(buttonNextPagination);\r\n  wrapperPagination.appendChild(labelLimit);\r\n  wrapperPagination.append(selectLimit);\r\n  return wrapperPagination;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);\r\n\n\n//# sourceURL=webpack://spa-nodejs/./src/client/components/Pagination.js?");

/***/ }),

/***/ "./src/client/components/ProductInput.js":
/*!***********************************************!*\
  !*** ./src/client/components/ProductInput.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state.js */ \"./src/client/state.js\");\n\r\n\r\nfunction ProductInput() {\r\n  const input = document.createElement(\"input\");\r\n  input.id = \"input\";\r\n  input.value = _state_js__WEBPACK_IMPORTED_MODULE_0__.state.inputValue;\r\n  input.oninput = function (event) {\r\n    (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setState)({ inputValue: event.target.value });\r\n  };\r\n  input.placeholder = \"Input your name\";\r\n\r\n  const buttonClear = document.createElement(\"button\");\r\n  buttonClear.disabled = _state_js__WEBPACK_IMPORTED_MODULE_0__.state.isLoading;\r\n  buttonClear.textContent = \"Clear\";\r\n  buttonClear.onclick = function () {\r\n    (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setState)({ inputValue: \"\" });\r\n  };\r\n\r\n  const div = document.createElement(\"div\");\r\n\r\n  div.append(input);\r\n  div.append(buttonClear);\r\n  return div;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductInput);\r\n\n\n//# sourceURL=webpack://spa-nodejs/./src/client/components/ProductInput.js?");

/***/ }),

/***/ "./src/client/components/ProductList.js":
/*!**********************************************!*\
  !*** ./src/client/components/ProductList.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state.js */ \"./src/client/state.js\");\n\r\n\r\nfunction ProductList() {\r\n  const titleProduct = document.createElement(\"ul\");\r\n  titleProduct.textContent = \"Daftar Produk\";\r\n  titleProduct.style.fontSize = \"20px\";\r\n\r\n  if (_state_js__WEBPACK_IMPORTED_MODULE_0__.state.isLoading) {\r\n    const titleProductInfo = document.createElement(\"h1\");\r\n    titleProductInfo.textContent = \"Loading...\";\r\n    titleProduct.append(titleProductInfo);\r\n  } else if (_state_js__WEBPACK_IMPORTED_MODULE_0__.state.errorMessage !== \"\") {\r\n    const titleProductInfo = document.createElement(\"h1\");\r\n    titleProductInfo.textContent = _state_js__WEBPACK_IMPORTED_MODULE_0__.state.errorMessage;\r\n    titleProduct.append(titleProductInfo);\r\n  } else if (_state_js__WEBPACK_IMPORTED_MODULE_0__.state.products.length === 0) {\r\n    const titleProductInfo = document.createElement(\"h1\");\r\n    titleProductInfo.textContent = \"produk tidak ada\";\r\n    titleProduct.append(titleProductInfo);\r\n  } else {\r\n    _state_js__WEBPACK_IMPORTED_MODULE_0__.state.products.forEach((item) => {\r\n      const titleProductList = document.createElement(\"li\");\r\n      titleProductList.textContent = item.title;\r\n\r\n      const categoryProduct = document.createElement(\"span\");\r\n      categoryProduct.textContent = item.category;\r\n      titleProduct.append(titleProductList);\r\n      titleProduct.append(categoryProduct);\r\n    });\r\n  }\r\n\r\n  const div = document.createElement(\"div\");\r\n  div.append(titleProduct);\r\n  return div;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductList);\r\n\n\n//# sourceURL=webpack://spa-nodejs/./src/client/components/ProductList.js?");

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ \"./src/client/state.js\");\n\r\n(0,_state_js__WEBPACK_IMPORTED_MODULE_0__.render)();\r\n(0,_state_js__WEBPACK_IMPORTED_MODULE_0__.onStateChange)({}, _state_js__WEBPACK_IMPORTED_MODULE_0__.state);\r\n\n\n//# sourceURL=webpack://spa-nodejs/./src/client/index.js?");

/***/ }),

/***/ "./src/client/screens/AboutPage.js":
/*!*****************************************!*\
  !*** ./src/client/screens/AboutPage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Link.js */ \"./src/client/components/Link.js\");\n\r\n\r\nfunction AboutScreen() {\r\n  const linkHome = (0,_components_Link_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    href: \"/home\",\r\n    label: \"Kembali ke Home\",\r\n  });\r\n\r\n  const textAbout = document.createElement(\"h1\");\r\n  textAbout.textContent = \"Ini Halaman About\";\r\n\r\n  const div = document.createElement(\"div\");\r\n  div.append(linkHome);\r\n  div.append(textAbout);\r\n\r\n  return div;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutScreen);\r\n\n\n//# sourceURL=webpack://spa-nodejs/./src/client/screens/AboutPage.js?");

/***/ }),

/***/ "./src/client/screens/FavoritePage.js":
/*!********************************************!*\
  !*** ./src/client/screens/FavoritePage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_ContactListItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ContactListItem.js */ \"./src/client/components/ContactListItem.js\");\n/* harmony import */ var _components_Link_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Link.js */ \"./src/client/components/Link.js\");\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state.js */ \"./src/client/state.js\");\n\r\n\r\n\r\n\r\nfunction FavoritePage() {\r\n  const linkSearch = (0,_components_Link_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n    href: \"/search-contact\",\r\n    label: \"Kembali ke Search Contact\",\r\n  });\r\n\r\n  //   start\r\n  const list = document.createElement(\"ol\");\r\n  list.append(\r\n    ..._state_js__WEBPACK_IMPORTED_MODULE_2__.state.favoriteContacts.map((contact) =>\r\n      (0,_components_ContactListItem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n        id: contact.id,\r\n        firstName: contact.firstName,\r\n        maidenName: contact.maidenName,\r\n        lastName: contact.lastName,\r\n        email: contact.email,\r\n      })\r\n    )\r\n  );\r\n\r\n  const emptyText = document.createElement(\"p\");\r\n  emptyText.textContent = \"No data found\";\r\n\r\n  const wrapper = document.createElement(\"div\");\r\n  wrapper.appendChild(linkSearch);\r\n\r\n  if (_state_js__WEBPACK_IMPORTED_MODULE_2__.state.favoriteContacts.length === 0) {\r\n    wrapper.appendChild(emptyText);\r\n  } else {\r\n    wrapper.appendChild(list);\r\n  }\r\n\r\n  return wrapper;\r\n  // end\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoritePage);\r\n\n\n//# sourceURL=webpack://spa-nodejs/./src/client/screens/FavoritePage.js?");

/***/ }),

/***/ "./src/client/screens/HomePage.js":
/*!****************************************!*\
  !*** ./src/client/screens/HomePage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Navbar.js */ \"./src/client/components/Navbar.js\");\n/* harmony import */ var _components_Pagination_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Pagination.js */ \"./src/client/components/Pagination.js\");\n/* harmony import */ var _components_ProductInput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductInput.js */ \"./src/client/components/ProductInput.js\");\n/* harmony import */ var _components_ProductList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProductList.js */ \"./src/client/components/ProductList.js\");\n\r\n\r\n\r\n\r\n\r\nfunction HomeScreen() {\r\n  const navbar = (0,_components_Navbar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  const textPreview = document.createElement(\"p\");\r\n  textPreview.textContent = \"Cari product Anda :\";\r\n\r\n  const div = document.createElement(\"div\");\r\n\r\n  div.append(navbar);\r\n  div.append(textPreview);\r\n  div.append((0,_components_ProductInput_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n  div.append((0,_components_Pagination_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n  div.append((0,_components_ProductList_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\n\r\n  return div;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeScreen);\r\n\n\n//# sourceURL=webpack://spa-nodejs/./src/client/screens/HomePage.js?");

/***/ }),

/***/ "./src/client/screens/InputProduct.js":
/*!********************************************!*\
  !*** ./src/client/screens/InputProduct.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Link.js */ \"./src/client/components/Link.js\");\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state.js */ \"./src/client/state.js\");\n\r\n\r\n\r\nfunction InputProduct() {\r\n  const linkHome = (0,_components_Link_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    href: \"/home\",\r\n    label: \"Kembali ke Home\",\r\n  });\r\n\r\n  const formInput = document.createElement(\"form\");\r\n  formInput.style.display = \"table-caption\";\r\n  formInput.style.marginTop = \"20px\";\r\n\r\n  const labelNameItem = document.createElement(\"label\");\r\n  labelNameItem.textContent = \"Nama Barang\";\r\n\r\n  const inputNameItem = document.createElement(\"input\");\r\n  inputNameItem.placeholder = \"ketik nama barang\";\r\n  inputNameItem.type = \"text\";\r\n\r\n  const labelPriceItem = document.createElement(\"label\");\r\n  labelPriceItem.texsettContent = \"Harga\";\r\n\r\n  const inputPriceItem = document.createElement(\"input\");\r\n  inputPriceItem.placeholder = \"ketik harga\";\r\n\r\n  const submitItem = document.createElement(\"input\");\r\n  submitItem.value = \"Submit\";\r\n  submitItem.type = \"submit\";\r\n\r\n  formInput.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n\r\n    (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setState)({\r\n      inputName: inputNameItem.value,\r\n      inputPrice: inputPriceItem.value,\r\n    });\r\n\r\n    if (_state_js__WEBPACK_IMPORTED_MODULE_1__.state.inputName && _state_js__WEBPACK_IMPORTED_MODULE_1__.state.inputPrice !== \"\") {\r\n      let product = {\r\n        nameItem: _state_js__WEBPACK_IMPORTED_MODULE_1__.state.inputName,\r\n        priceItem: _state_js__WEBPACK_IMPORTED_MODULE_1__.state.inputPrice,\r\n      };\r\n\r\n      const mergedArray = _state_js__WEBPACK_IMPORTED_MODULE_1__.state.inputProducts.concat(product);\r\n      (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setState)({ inputProducts: mergedArray });\r\n    }\r\n  });\r\n\r\n  const titleItem = document.createElement(\"h3\");\r\n  titleItem.textContent = \"List barang\";\r\n\r\n  const wrapperListItem = document.createElement(\"ul\");\r\n  wrapperListItem.style.width = \"200px\";\r\n\r\n  _state_js__WEBPACK_IMPORTED_MODULE_1__.state.inputProducts.forEach((item, index) => {\r\n    const wrapperItem = document.createElement(\"li\");\r\n    wrapperItem.style.display = \"flex\";\r\n    wrapperItem.style.justifyContent = \"space-between\";\r\n\r\n    const listItemName = document.createElement(\"p\");\r\n    listItemName.style.margin = \"0\";\r\n    listItemName.textContent = item.nameItem;\r\n\r\n    const listItemPrice = document.createElement(\"span\");\r\n    listItemPrice.textContent = item.priceItem;\r\n\r\n    const deleteItem = document.createElement(\"button\");\r\n    deleteItem.textContent = \"Hapus\";\r\n    deleteItem.onclick = () => {\r\n      const result = _state_js__WEBPACK_IMPORTED_MODULE_1__.state.inputProducts;\r\n      const indexToRemove = index;\r\n\r\n      if (indexToRemove >= 0 && indexToRemove < result.length) {\r\n        const newArray = result.filter((obj, index) => index !== indexToRemove);\r\n\r\n        (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setState)({ inputProducts: newArray });\r\n      }\r\n    };\r\n\r\n    wrapperListItem.appendChild(wrapperItem);\r\n    wrapperItem.appendChild(listItemName);\r\n    wrapperItem.appendChild(listItemPrice);\r\n    wrapperItem.appendChild(deleteItem);\r\n  });\r\n\r\n  const div = document.createElement(\"div\");\r\n  div.append(linkHome);\r\n  div.append(formInput);\r\n  div.append(titleItem);\r\n  div.append(wrapperListItem);\r\n\r\n  formInput.appendChild(labelNameItem);\r\n  formInput.appendChild(inputNameItem);\r\n  formInput.appendChild(labelPriceItem);\r\n  formInput.appendChild(inputPriceItem);\r\n  formInput.appendChild(submitItem);\r\n  return div;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputProduct);\r\n\n\n//# sourceURL=webpack://spa-nodejs/./src/client/screens/InputProduct.js?");

/***/ }),

/***/ "./src/client/screens/NotFound.js":
/*!****************************************!*\
  !*** ./src/client/screens/NotFound.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Link.js */ \"./src/client/components/Link.js\");\n\r\n\r\nfunction NotFoundPage() {\r\n  const linkHome = (0,_components_Link_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    href: \"/home\",\r\n    label: \"Kembali ke Home\",\r\n  });\r\n\r\n  const title = document.createElement(\"h1\");\r\n  title.textContent = \"Not Found Page\";\r\n\r\n  const div = document.createElement(\"div\");\r\n\r\n  div.append(linkHome);\r\n  div.append(title);\r\n  return div;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);\r\n\n\n//# sourceURL=webpack://spa-nodejs/./src/client/screens/NotFound.js?");

/***/ }),

/***/ "./src/client/screens/SeachContactPage.js":
/*!************************************************!*\
  !*** ./src/client/screens/SeachContactPage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_ContactListItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ContactListItem.js */ \"./src/client/components/ContactListItem.js\");\n/* harmony import */ var _components_Link_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Link.js */ \"./src/client/components/Link.js\");\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state.js */ \"./src/client/state.js\");\n\r\n\r\n\r\n\r\nfunction SearchContact() {\r\n  const linkHome = (0,_components_Link_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n    href: \"/home\",\r\n    label: \"Kembali ke Home\",\r\n  });\r\n\r\n  const linkFavorite = (0,_components_Link_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n    href: \"/favorite\",\r\n    label: \"Favorite\",\r\n  });\r\n\r\n  //   start\r\n  const list = document.createElement(\"ol\");\r\n  list.append(\r\n    ..._state_js__WEBPACK_IMPORTED_MODULE_2__.state.contacts.map((contact) =>\r\n      (0,_components_ContactListItem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n        id: contact.id,\r\n        firstName: contact.firstName,\r\n        maidenName: contact.maidenName,\r\n        lastName: contact.lastName,\r\n        email: contact.email,\r\n      })\r\n    )\r\n  );\r\n\r\n  const input = document.createElement(\"input\");\r\n  input.id = \"search\";\r\n  input.placeholder = \"Search a name\";\r\n  input.value = _state_js__WEBPACK_IMPORTED_MODULE_2__.state.inputValueFavorite;\r\n  input.oninput = function (event) {\r\n    const value = event.target.value;\r\n    (0,_state_js__WEBPACK_IMPORTED_MODULE_2__.setState)({ inputValueFavorite: value });\r\n  };\r\n\r\n  const resetButton = document.createElement(\"button\");\r\n  resetButton.textContent = \"Reset\";\r\n  resetButton.onclick = function () {\r\n    (0,_state_js__WEBPACK_IMPORTED_MODULE_2__.setState)({ inputValueFavorite: \"\" });\r\n  };\r\n\r\n  const emptyText = document.createElement(\"p\");\r\n  emptyText.textContent = \"No data found\";\r\n\r\n  const errorText = document.createElement(\"p\");\r\n  errorText.textContent = _state_js__WEBPACK_IMPORTED_MODULE_2__.state.errorMessage;\r\n\r\n  const loadingText = document.createElement(\"p\");\r\n  loadingText.textContent = \"Loading...\";\r\n\r\n  const wrapper = document.createElement(\"div\");\r\n  wrapper.appendChild(linkHome);\r\n  wrapper.appendChild(linkFavorite);\r\n\r\n  const div = document.createElement(\"div\");\r\n  wrapper.append(div);\r\n  div.append(input);\r\n  div.append(resetButton);\r\n\r\n  if (_state_js__WEBPACK_IMPORTED_MODULE_2__.state.isLoading) {\r\n    wrapper.appendChild(loadingText);\r\n  } else if (_state_js__WEBPACK_IMPORTED_MODULE_2__.state.errorMessage !== \"\") {\r\n    wrapper.appendChild(errorText);\r\n  } else if (_state_js__WEBPACK_IMPORTED_MODULE_2__.state.contacts.length === 0) {\r\n    wrapper.appendChild(emptyText);\r\n  } else {\r\n    wrapper.appendChild(list);\r\n  }\r\n\r\n  // end\r\n  return wrapper;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchContact);\r\n\n\n//# sourceURL=webpack://spa-nodejs/./src/client/screens/SeachContactPage.js?");

/***/ }),

/***/ "./src/client/state.js":
/*!*****************************!*\
  !*** ./src/client/state.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   onStateChange: () => (/* binding */ onStateChange),\n/* harmony export */   render: () => (/* binding */ render),\n/* harmony export */   setState: () => (/* binding */ setState),\n/* harmony export */   state: () => (/* binding */ state)\n/* harmony export */ });\n/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.js */ \"./src/client/App.js\");\n\r\n\r\nlet state = {\r\n  inputValue: localStorage.getItem(\"inputValue\") ?? \"\",\r\n  path: location.pathname,\r\n  products: [],\r\n  limitItem: 5,\r\n  skipItem: 0,\r\n  total: 0,\r\n  isLoading: false,\r\n  errorMessage: \"\",\r\n  inputProducts: JSON.parse(localStorage.getItem(\"productItem\")) || [],\r\n  inputPrice: \"\",\r\n  inputName: \"\",\r\n  inputValueFavorite: localStorage.getItem(\"inputValueFavorite\") ?? \"\",\r\n  contacts: [],\r\n  favoriteContacts: JSON.parse(localStorage.getItem(\"favoriteContacts\")) ?? [],\r\n};\r\n\r\nfunction setState(newState) {\r\n  const prevState = { ...state };\r\n  const nextState = { ...state, ...newState };\r\n  state = nextState;\r\n  render();\r\n  onStateChange(prevState, nextState);\r\n}\r\n\r\nlet timer;\r\n// Ini adalah sideEffect, dimana sebuah function yg akan dijalankan ketika state nya berubah\r\nfunction onStateChange(prevState, nextState) {\r\n  if (prevState.inputProducts !== nextState.inputProducts) {\r\n    localStorage.setItem(\r\n      \"productItem\",\r\n      JSON.stringify(nextState.inputProducts)\r\n    );\r\n  }\r\n\r\n  if (prevState.inputValue !== nextState.inputValue) {\r\n    setState({ skipItem: 0 });\r\n  }\r\n\r\n  if (\r\n    prevState.inputValue !== nextState.inputValue ||\r\n    prevState.skipItem !== nextState.skipItem ||\r\n    prevState.limitItem !== nextState.limitItem\r\n  ) {\r\n    localStorage.setItem(\"inputValue\", nextState.inputValue);\r\n    const PRODUCT_JSON_API = `https://dummyjson.com/products/search?limit=${nextState.limitItem}&skip=${nextState.skipItem}&select=title,category&q=${nextState.inputValue}`;\r\n\r\n    setState({ isLoading: true });\r\n\r\n    fetch(PRODUCT_JSON_API)\r\n      .then((response) => {\r\n        if (response.ok) {\r\n          return response.json();\r\n        } else {\r\n          return Promise.reject({\r\n            status: response.status,\r\n          });\r\n        }\r\n      })\r\n      .then((json) => {\r\n        const dataProducts = json.products;\r\n        setState({\r\n          products: dataProducts,\r\n          total: json.total,\r\n          errorMessage: \"\",\r\n          isLoading: false,\r\n        });\r\n      })\r\n      .catch((error) => {\r\n        setState({\r\n          errorMessage: \"error fetching\",\r\n          isLoading: false,\r\n          products: [],\r\n        });\r\n      });\r\n  }\r\n\r\n  if (prevState.path !== nextState.path) {\r\n    history.pushState(null, \"\", nextState.path);\r\n  }\r\n\r\n  if (prevState.inputValueFavorite != nextState.inputValueFavorite) {\r\n    localStorage.setItem(\"inputValueFavorite\", nextState.inputValueFavorite);\r\n\r\n    if (timer) {\r\n      clearTimeout(timer);\r\n    }\r\n\r\n    setState({ isLoading: true });\r\n    timer = setTimeout(() => {\r\n      fetch(\r\n        `https://dummyjson.com/users/search?q=${nextState.inputValueFavorite}`\r\n      )\r\n        .then((res) => res.json())\r\n        .then((data) => setState({ contacts: data.users, errorMessage: \"\" }))\r\n        .catch((err) => setState({ contacts: [], errorMessage: err.message }))\r\n        .finally(() => setState({ isLoading: false }));\r\n    }, 600);\r\n  }\r\n\r\n  if (prevState.favoriteContacts != nextState.favoriteContacts) {\r\n    localStorage.setItem(\r\n      \"favoriteContacts\",\r\n      JSON.stringify(nextState.favoriteContacts)\r\n    );\r\n  }\r\n}\r\n\r\nfunction render() {\r\n  const focusedElementId = document.activeElement.id;\r\n  const focusedElementSelectionStart = document.activeElement.selectionStart;\r\n  const focusedElementSelectionEnd = document.activeElement.selectionEnd;\r\n\r\n  const root = document.getElementById(\"root\");\r\n  const app = (0,_App_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  root.innerHTML = \"\";\r\n  root.append(app);\r\n  if (focusedElementId) {\r\n    const focusedElement = document.getElementById(focusedElementId);\r\n    focusedElement.focus();\r\n    focusedElement.selectionStart = focusedElementSelectionStart;\r\n    focusedElement.selectionEnd = focusedElementSelectionEnd;\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://spa-nodejs/./src/client/state.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/index.js");
/******/ 	
/******/ })()
;