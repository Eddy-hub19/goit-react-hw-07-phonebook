import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactSlice';
import { ContactBtn, ContactItem, Name } from '../ContactList.styled';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <ContactItem>
      <Name>
        {name}: {number}
      </Name>
      <ContactBtn type="button" onClick={handleDelete}>
        Delete
      </ContactBtn>
    </ContactItem>
  );
}

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
