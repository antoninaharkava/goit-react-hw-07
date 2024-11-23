
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import s from './Contact.module.css';


const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.contact}>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

export default Contact;