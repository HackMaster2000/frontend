import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions/userActions';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);

  const redirect = location.search ? location.search.split('=')[1] : '/';
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden');
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="mb-4 text-center">Registrarse</h1>
              {message && <p className="text-center text-danger">{message}</p>}
              {error && <p className="text-center text-danger">{error}</p>}
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <input
                    id="name"
                    type="name"
                    placeholder="Ingresa tu nombre"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    id="email"
                    required
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    required
                    id="password"
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    required
                    id="confirm-password"
                    type="password"
                    placeholder="Confirma tu contraseña"
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  {loading ? <div className="spinner-border spinner-border-sm" role="status"></div> : 'Registrarse'}
                </button>
              </form>
              <p className="mt-3 text-center">
                ¿Ya tienes una cuenta? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Iniciar sesión</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
