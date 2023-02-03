import ContactForm from './ContactForm/ContactForm';
import { getContacts } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { Container, Title } from './App.styled';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <>
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />
        <h3>Contacts</h3>
        {contacts.length > 0 && <Filter />}
        {contacts.length === 0 && <div>There is not any contacts</div>}
        <ContactList />
      </Container>
    </>
  );
};
