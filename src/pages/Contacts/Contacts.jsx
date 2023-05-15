import { Wrapper } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
// import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};

export default Contacts;
