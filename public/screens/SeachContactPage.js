import ContactListItem from "../components/ContactListItem.js";
import Link from "../components/Link.js";
import { state, setState } from "../state.js";

function SearchContact() {
  const linkHome = Link({
    href: "/home",
    label: "Kembali ke Home",
  });

  const linkFavorite = Link({
    href: "/favorite",
    label: "Favorite",
  });

  //   start
  const list = document.createElement("ol");
  list.append(
    ...state.contacts.map((contact) =>
      ContactListItem({
        id: contact.id,
        firstName: contact.firstName,
        maidenName: contact.maidenName,
        lastName: contact.lastName,
        email: contact.email,
      })
    )
  );

  const input = document.createElement("input");
  input.id = "search";
  input.placeholder = "Search a name";
  input.value = state.inputValueFavorite;
  input.oninput = function (event) {
    const value = event.target.value;
    setState({ inputValueFavorite: value });
  };

  const resetButton = document.createElement("button");
  resetButton.textContent = "Reset";
  resetButton.onclick = function () {
    setState({ inputValueFavorite: "" });
  };

  const emptyText = document.createElement("p");
  emptyText.textContent = "No data found";

  const errorText = document.createElement("p");
  errorText.textContent = state.errorMessage;

  const loadingText = document.createElement("p");
  loadingText.textContent = "Loading...";

  const wrapper = document.createElement("div");
  wrapper.appendChild(linkHome);
  wrapper.appendChild(linkFavorite);

  const div = document.createElement("div");
  wrapper.append(div);
  div.append(input);
  div.append(resetButton);

  if (state.isLoading) {
    wrapper.appendChild(loadingText);
  } else if (state.errorMessage !== "") {
    wrapper.appendChild(errorText);
  } else if (state.contacts.length === 0) {
    wrapper.appendChild(emptyText);
  } else {
    wrapper.appendChild(list);
  }

  // end
  return wrapper;
}

export default SearchContact;
