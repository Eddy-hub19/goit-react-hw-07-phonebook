import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Container, Title } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Loader from 'components/Loader/Loader';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />
        <h3>Contacts</h3>
        {contacts.length > 0 && <Filter />}
        {isLoading && !error && <Loader />}
        {!isLoading && !error && contacts.length === 0 && (
          <div>There is not any contacts</div>
        )}
        <ContactList />
      </Container>
    </>
  );
};
