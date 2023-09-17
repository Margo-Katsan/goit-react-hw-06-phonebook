import { useSelector } from "react-redux"
import { getContacts } from "redux/contactsSlice";
import { getFilter } from "redux/filterSlice";
import { ContactListItem } from "components/ContactListItem/ContactListItem"
import css from "./ContactsList.module.css"

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContactItems = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <ul className={css.contacts}>
      {
        visibleContactItems.map(contact => <ContactListItem contact={contact} />)
      }
    </ul>
  )
}