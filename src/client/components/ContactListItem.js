import { state, setState } from "../state.js";

function ContactListItem(props) {
  const name = document.createElement("p");
  name.textContent = `${props.firstName} ${props.maidenName} ${props.lastName}`;

  const email = document.createElement("p");
  email.textContent = props.email;

  const addFavoriteButton = document.createElement("button");
  addFavoriteButton.textContent = "add to favorite";
  addFavoriteButton.onclick = function () {
    const favoriteContacts = state.favoriteContacts.concat({
      id: props.id,
      firstName: props.firstName,
      lastName: props.lastName,
      maidenName: props.maidenName,
      email: props.email,
    });
    setState({ favoriteContacts });
  };

  const removeFavoriteButton = document.createElement("button");
  removeFavoriteButton.textContent = "remove from favorite";
  removeFavoriteButton.onclick = function () {
    const favoriteContacts = state.favoriteContacts.filter(
      ({ id }) => id != props.id
    );
    setState({ favoriteContacts });
  };

  const isFavorite = state.favoriteContacts.some(({ id }) => props.id === id);

  const item = document.createElement("li");
  item.appendChild(name);
  item.appendChild(email);
  item.appendChild(isFavorite ? removeFavoriteButton : addFavoriteButton);

  return item;
}

export default ContactListItem;
