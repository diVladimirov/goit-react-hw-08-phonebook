import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/authOperations';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.createNewUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <div>
        <h1>RegisterPage</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
