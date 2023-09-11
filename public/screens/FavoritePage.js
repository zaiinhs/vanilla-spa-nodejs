import ContactListItem from "../components/ContactListItem.js";
import Link from "../components/Link.js";
import { state } from "../state.js";

function FavoritePage() {
  const linkSearch = Link({
    href: "/search-contact",
    label: "Kembali ke Search Contact",
  });

  //   start
  const list = document.createElement("ol");
  list.append(
    ...state.favoriteContacts.map((contact) =>
      ContactListItem({
        id: contact.id,
        firstName: contact.firstName,
        maidenName: contact.maidenName,
        lastName: contact.lastName,
        email: contact.email,
      })
    )
  );

  const emptyText = document.createElement("p");
  emptyText.textContent = "No data found";

  const wrapper = document.createElement("div");
  wrapper.appendChild(linkSearch);

  if (state.favoriteContacts.length === 0) {
    wrapper.appendChild(emptyText);
  } else {
    wrapper.appendChild(list);
  }

  return wrapper;
  // end
}

export default FavoritePage;
