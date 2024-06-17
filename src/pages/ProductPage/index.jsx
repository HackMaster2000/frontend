import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import { addToCart } from '../../redux/actions/cartActions';

function ProductPage() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);

    useEffect(() => {
        // Convertir productId a número entero para comparar con cartItems
        const productIdInt = parseInt(productId);

        api.getProduct(productIdInt)
            .then(response => {
                setProduct(response.data);
                setLoading(false);

                // Encontrar el cartItem correspondiente
                const cartItem = cartItems.find(item => item.product === productIdInt);
                if (cartItem) {
                    setQuantity(cartItem.qty);
                } else {
                    setQuantity(1); // Si no hay cartItem, establecer cantidad en 1
                }
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
                setLoading(false);
            });
    }, [productId, cartItems, dispatch]);

    const addToCartHandler = () => {
        // Convertir productId a número entero para comparar con cartItems
        const productIdInt = parseInt(productId);

        const cartItem = cartItems.find(item => item.product === productIdInt);
        const currentQty = cartItem ? cartItem.qty : 0;
        const newQty = currentQty + quantity;

        if (newQty <= product.stock) {
            dispatch(addToCart(productIdInt, newQty));
            console.log(`Añadido ${quantity} unidades de ${product.name} al carrito.`);
        } else {
            alert('No puedes añadir más productos de los disponibles en stock');
        }
    };

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    return (
        <>
            {loading ? (
                <div className="container mt-5 mb-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="alert alert-info text-center">
                                Loading product details...
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container mt-5" style={{ marginBottom: 150 }}>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card border-0 shadow-sm">
                                <div className="card-header bg-white text-center">
                                    <h2 className="card-title">{product.name}</h2>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 d-flex justify-content-center">
                                            <img 
                                                src={`${import.meta.env.VITE_API_URL}${product.image}`} 
                                                className="img-fluid rounded" 
                                                alt={product.name}
                                                style={{ objectFit: 'cover', height: '100%', maxHeight: '400px' }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <h4 className="card-subtitle mb-2 text-muted">Precio: ${product.price}</h4>
                                            <p className="card-text mb-4">{product.description}</p>
                                            <p className="card-text"><strong>Stock:</strong> {product.stock}</p>
                                            <div className="mb-3">
                                                <label htmlFor="quantity" className="form-label">Cantidad</label>
                                                <select 
                                                    className="form-select" 
                                                    id="quantity" 
                                                    value={quantity} 
                                                    onChange={handleQuantityChange}
                                                >
                                                    {[...Array(product.stock).keys()].map((index) => (
                                                        <option key={index + 1} value={index + 1}>{index + 1}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <button 
                                                className="btn btn-success w-100" 
                                                onClick={addToCartHandler}
                                                disabled={product.stock === 0}
                                            >
                                                {product.stock === 0 ? 'Sin stock' : 'Añadir al carrito'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductPage;
