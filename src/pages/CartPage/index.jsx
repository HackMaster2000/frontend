import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/solid';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

function CartPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    const qty = queryParams.get('qty') ? Number(queryParams.get('qty')) : 1;
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, location.search]);

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const updateCartHandler = (productId, qty) => {
    dispatch(addToCart(productId, qty));
  };

  const checkoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Carrito de Compras</h2>
      <div className="row">
        <div className="col-md-8">
          {cartItems.length === 0 ? (
            <div className="alert alert-info text-center">
              Tu carrito está vacío
              <Link to="/" className="alert-link"> Volver</Link>
            </div>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.product} className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                      <img src={`${import.meta.env.VITE_API_URL}${item.image}`} className="img-fluid rounded" alt={item.name} style={{ maxHeight: '150px' }} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">
                          <Link to={`/product/${item.product}`}>{item.name}</Link>
                        </h5>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <p className="card-text">
                              <strong>
                                {new Intl.NumberFormat('en', {
                                  currency: 'USD',
                                  style: 'currency',
                                }).format(item.price)}
                              </strong>
                            </p>
                            <div className="input-group">
                              <select
                                value={item.qty}
                                onChange={(e) => updateCartHandler(item.product, Number(e.target.value))}
                                className="form-select"
                              >
                                {[...Array(item.stock).keys()].map((x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => removeFromCartHandler(item.product)}
                          >
                            <TrashIcon className="h-3" /> Remover
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-md-4" style={{ marginBottom: 150 }}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Total de {cartItems.reduce((acc, item) => acc + item.qty, 0)} productos
              </h5>
              <p className="card-text">
                {new Intl.NumberFormat('en', { currency: 'USD', style: 'currency' }).format(
                  cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)
                )}
              </p>
              <button
                type="button"
                className="btn btn-success w-100"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
