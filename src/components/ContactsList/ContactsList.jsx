import { useEffect} from "react";
import { useSelector } from "react-redux"
import { ContactListItem } from "components/ContactListItem/ContactListItem"
import css from "./ContactsList.module.css"

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  
  useEffect(() => {
    localStorage.setItem("Contacts", JSON.stringify(contacts));
  }, [contacts]);

  const visibleContactItems = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <ul className={css.contacts}>
      {
        visibleContactItems.map(contact => {
          return <ContactListItem contact={contact} />
        })
      }
    </ul>
  )
}