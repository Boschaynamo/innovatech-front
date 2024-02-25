// AuthForm.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn, signUp } from '../../redux/actions';
import PropTypes from 'prop-types';

const LoginForm = ({ type }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'signin') {
      dispatch(signIn(email, password));
    } else if (type === 'signup') {
      dispatch(signUp(email, password));
    }
  };
  const handleGoogleSignIn = () => {
    // Aquí puedes implementar la lógica para iniciar sesión con Google
    // Por ejemplo, redireccionando a una URL proporcionada por tu backend
    window.location.href = 'http://localhost:3001/auth/google';
  };

  const handleGitHubSignIn = () => {
    // Aquí puedes implementar la lógica para iniciar sesión con GitHub
    // Por ejemplo, redireccionando a una URL proporcionada por tu backend
    window.location.href = 'http://localhost:3001/auth/github';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">{type === 'signin' ? 'Sign In' : 'Sign Up'}</button>
      {type === 'signin' && (
        <>
          <button type="button" onClick={handleGoogleSignIn}>Sign In with Google</button>
          <button type="button" onClick={handleGitHubSignIn}>Sign In with GitHub</button>
        </>
      )}
    </form>
  );
};


LoginForm.propTypes = {
  type: PropTypes.oneOf(['signin', 'signup']).isRequired // Valida que type sea 'signin' o 'signup'
};

export default LoginForm;
