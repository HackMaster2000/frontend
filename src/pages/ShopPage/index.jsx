import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import api from '../../services/api';
import { Link } from 'react-router-dom';

function ShopPage() {
    const [productsData, setProductsData] = useState([]);
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);

    useEffect(() => {
        api.getProducts()
            .then(response => {
                setProductsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleAddToCart = (product) => {
        const cartItem = cartItems.find(item => item.product === product._id);
        const cartQuantity = cartItem ? cartItem.qty : 0;

        if (cartQuantity < product.stock) {
            dispatch(addToCart(product._id, cartQuantity + 1));
        } else {
            alert('No puedes añadir más productos de los disponibles en stock');
        }
    };

    return (
        <>
            <div class="hero">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-lg-5">
                            <div class="intro-excerpt">
                                <h1>Tienda</h1>
                                <p class="mb-4">Explora nuestra selección exclusiva de muebles y accesorios. Cada pieza está diseñada para brindar estilo y comodidad a tu hogar. Desde sillas ergonómicas hasta mesas elegantes, encontrarás todo lo que necesitas para crear el espacio perfecto.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="untree_co-section product-section before-footer-section">
                <div class="container">
                    <div class="row">
                        {productsData.map((product) => (
                            <div key={product._id} class="col-12 col-md-4 col-lg-3 mb-5">
                                <div class="product-item">
                                    <Link to={`/product/${product._id}`}>
                                        <img src={import.meta.env.VITE_API_URL + product.image} class="img-fluid product-thumbnail" />
                                        <h3 class="product-title">{product.name}</h3>
                                        <strong class="product-price">${product.price}</strong>
                                    </Link>
                                    {product.stock > 0 ?
                                        <button
                                            className='icon-cross'
                                            onClick={() => handleAddToCart(product)}>
                                            <img src="images/cross.svg" class="img-fluid" />
                                        </button> :
                                        <div>
                                            Sin Stock
                                        </div>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShopPage;