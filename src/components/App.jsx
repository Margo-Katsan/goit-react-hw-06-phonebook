import { ContactForm } from "./ContactForm/ContactForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import css from "./App.module.css"

export const App = () => {
  return (
    <div className={css.phonebook}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.secondTitle}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
} 