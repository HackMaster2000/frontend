import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';
import Loader from '../../components/Loader';
import { login } from '../../redux/actions/userActions';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const redirect = location.search ? location.search.split('=')[1] : '/';
  const { error, loading, userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="hero d-flex justify-content-center align-items-center bg-gray-100" style={{ height: '100vh' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow-lg p-4">
              <h1 className="mb-4 text-2xl font-bold text-center text-black">Iniciar Sesión</h1>
              {error && <p className="text-center text-danger font-bold text-red-500 pb-3">{error}</p>}
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <input
                    required
                    type="email"
                    id="email"
                    placeholder="Ingresa tu correo electrónico"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    required
                    type="password"
                    id="password"
                    placeholder="Ingresa tu contraseña"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm my-4"
                    style={{ minWidth: '120px' }} // reducir el ancho mínimo del botón
                  >
                    <ArrowRightStartOnRectangleIcon className="h-5 pr-1" />
                    Iniciar sesión {loading && <Loader />}
                  </button>
                </div>
              </form>
              <p className="text-black mt-2 text-center">
                ¿Nuevo usuario?{' '}
                <Link
                  className="font-bold hover:text-dark-orange text-dark-blue first-letter:duration-200"
                  to={'/register'}
                >
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;