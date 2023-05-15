import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          title="Please enter a valid email address"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};
