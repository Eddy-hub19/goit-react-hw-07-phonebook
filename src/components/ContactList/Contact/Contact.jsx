import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ContactBtn, ContactItem, Name } from '../ContactList.styled';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    setIsDeleting(true);
    dispatch(deleteContact(id));
  };
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <ContactItem>
      <Name>
        {name}: {number}
      </Name>
      <ContactBtn
        type="button"
        onClick={handleDelete}
        disabled={isDeleting && 'disabled'}
      >
        Delete
      </ContactBtn>
      {isDeleting && 'Deleting...'}
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
