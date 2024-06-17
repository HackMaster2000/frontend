import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'; 
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions'; // Asegúrate de importar la acción correcta

function HomePage() {
    const [productsData, setProductsData] = useState([]);
    const [testimonialsData, setTestimonialsData] = useState([]);
    const [blogsData, setBlogsData] = useState([]);
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
        api.getTestimonials()
            .then(response => {
                setTestimonialsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching testimonials:', error);
            });
        api.getBlogs()
            .then(response => {
                setBlogsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
            });
    }, []);

    const handleAddToCart = (product) => {
        const cartItem = cartItems.find(item => item.product === product._id);
        const cartQuantity = cartItem ? cartItem.qty : 0;

        if (cartQuantity < product.stock) {
            dispatch(addToCart(product._id, cartQuantity + 1)); // Llama a la acción addToCart con el id del producto y la cantidad actualizada
        } else {
            alert('No puedes añadir más productos de los disponibles en stock');
        }
    };

    function formatDate(dateString) {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', options).replace('.', '');
    }

    return (
        <>
            {/* <!-- Start Hero Section --> */}
            <div class="hero">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-lg-5">
                            <div class="intro-excerpt">
                            <h1>Estudio de Diseño <span class="d-block">Interior Moderno</span></h1>
                                <p class="mb-4">Descubre la armonía perfecta entre diseño y funcionalidad con nuestros productos. Transforma tus espacios con elegancia y confort.</p>
                                <p><Link to="/shop" class="btn btn-secondary me-2">Compra Ahora</Link><a href="#" class="btn btn-white-outline">Explorar</a></p>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="hero-img-wrap">
                                <img src="images/couch.png" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Hero Section --> */}

            {/* <!-- Start Product Section --> */}
            <div class="product-section">
                <div class="container">
                    <div class="row">

                        {/* <!-- Start Column 1 --> */}
                        <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
                            <h2 class="mb-4 section-title">Fabricado con materiales de excelente calidad.</h2>
                            <p class="mb-4">Nuestra colección combina estética y durabilidad para ofrecer productos que no solo embellecen tu hogar, sino que también resisten el paso del tiempo.</p>
                            <p><Link to="/shop" class="btn">Explorar</Link></p>
                        </div>
                        {/* <!-- End Column 1 --> */}

                        {/* <!-- Start Column 2 --> */}
                        {productsData.map((product) => (
                            <div key={product._id} class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                                <div class="product-item">
                                    <Link to={`/product/${product._id}`}>
                                        <img src={import.meta.env.VITE_API_URL + product.image} class="img-fluid product-thumbnail" />
                                        <h3 class="product-title">Silla Nórdica</h3>
                                        <strong class="product-price">$50.00</strong>
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
            {/* <!-- End Product Section --> */}

            {/* <!-- Start Why Choose Us Section --> */}
            <div class="why-choose-section">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-lg-6">
                        <h2 class="section-title">Por Qué Elegirnos</h2>
                            <p>Nuestro compromiso es ofrecer productos de alta calidad que transformen tus espacios y mejoren tu calidad de vida. Te acompañamos en cada paso del proceso.</p>

                            <div class="row my-5">
                                <div class="col-6 col-md-6">
                                    <div class="feature">
                                        <div class="icon">
                                            <img src="images/truck.svg" alt="Envío Rápido y Gratis" class="imf-fluid" />
                                        </div>
                                        <h3>Envío Rápido y Gratis</h3>
                                        <p>Disfruta de envío gratuito en todos tus pedidos y recibe tus productos en tiempo récord.</p>
                                    </div>
                                </div>

                                <div class="col-6 col-md-6">
                                    <div class="feature">
                                        <div class="icon">
                                            <img src="images/bag.svg" alt="Fácil de Comprar" class="imf-fluid" />
                                        </div>
                                        <h3>Fácil de Comprar</h3>
                                        <p>Navega y compra con facilidad en nuestra tienda en línea, diseñada para ofrecerte la mejor experiencia.</p>
                                    </div>
                                </div>

                                <div class="col-6 col-md-6">
                                    <div class="feature">
                                        <div class="icon">
                                            <img src="images/support.svg" alt="Soporte 24/7" class="imf-fluid" />
                                        </div>
                                        <h3>Soporte 24/7</h3>
                                        <p>Estamos disponibles las 24 horas del día, los 7 días de la semana, para resolver cualquier duda o inconveniente que puedas tener.</p>
                                    </div>
                                </div>

                                <div class="col-6 col-md-6">
                                    <div class="feature">
                                        <div class="icon">
                                            <img src="images/return.svg" alt="Devoluciones Sin Complicaciones" class="imf-fluid" />
                                        </div>
                                        <h3>Devoluciones Sin Complicaciones</h3>
                                        <p>Si no estás satisfecho con tu compra, ofrecemos un proceso de devolución fácil y sin complicaciones.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="col-lg-5">
                            <div class="img-wrap">
                                <img src="images/why-choose-us-img.jpg" alt="Image" class="img-fluid" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- End Why Choose Us Section --> */}

            {/* <!-- Start We Help Section --> */}
            <div class="we-help-section">
                <div class="container">
                    <div class="row justify-content-between">
                    <div class="col-lg-7 mb-5 mb-lg-0">
                            <div class="imgs-grid">
                                <div class="grid grid-1"><img src="images/img-grid-1.jpg" alt="Diseño Moderno" /></div>
                                <div class="grid grid-2"><img src="images/img-grid-2.jpg" alt="Diseño Moderno" /></div>
                                <div class="grid grid-3"><img src="images/img-grid-3.jpg" alt="Diseño Moderno" /></div>
                            </div>
                        </div>
                        <div class="col-lg-5 ps-lg-5">
                            <h2 class="section-title mb-4">Te Ayudamos a Crear Diseño Interior Moderno</h2>
                            <p>Facilitamos la creación de espacios modernos y funcionales con nuestra gama de productos diseñados para satisfacer tus necesidades y gustos.</p>

                            <ul class="list-unstyled custom-list my-4">
                                <li>Materiales de alta calidad y durabilidad.</li>
                                <li>Diseños innovadores y elegantes.</li>
                                <li>Atención personalizada y soporte constante.</li>
                                <li>Procesos de compra y devolución sencillos.</li>
                            </ul>
                            <p><Link to="/shop" class="btn">Explorar</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End We Help Section --> */}

            {/* <!-- Start Popular Product --> */}
            <div class="popular-product">
                <div class="container">
                    <div class="row">

                        <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div class="product-item-sm d-flex">
                                <div class="thumbnail">
                                    <img src="images/product-1.png" alt="Image" class="img-fluid" />
                                </div>
                                <div class="pt-3">
                                    <h3>Silla Nórdica</h3>
                                    <p>Perfecta para cualquier espacio, combina estilo y comodidad.</p>
                                    <p><a href="#">Leer Más</a></p>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div class="product-item-sm d-flex">
                                <div class="thumbnail">
                                    <img src="images/product-2.png" alt="Image" class="img-fluid" />
                                </div>
                                <div class="pt-3">
                                    <h3>Silla Kruzo Aero</h3>
                                    <p>Estilo moderno con ergonomía superior para un confort excepcional.</p>
                                    <p><a href="#">Leer Más</a></p>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div class="product-item-sm d-flex">
                                <div class="thumbnail">
                                    <img src="images/product-3.png" alt="Image" class="img-fluid" />
                                </div>
                                <div class="pt-3">
                                    <h3>Silla Ergonómica</h3>
                                    <p>Diseño funcional que cuida tu salud postural mientras trabajas.</p>
                                    <p><a href="#">Leer Más</a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- End Popular Product --> */}

            {/* <!-- Start Testimonial Slider --> */}
            <div class="testimonial-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 mx-auto text-center">
                        <h2>Testimonios</h2>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="testimonial-slider-wrap text-center">

                                <div id="testimonial-nav">
                                    <span class="prev" data-controls="prev"><span class="fa fa-chevron-left"></span></span>
                                    <span class="next" data-controls="next"><span class="fa fa-chevron-right"></span></span>
                                </div>

                                <div class="testimonial-slider">

                                    <div class="item">
                                        <div class="row justify-content-center">
                                            <div class="col-lg-8 mx-auto">

                                            { testimonialsData.map((testimonial) => (
                                                <div key={testimonial._id} class="testimonial-block text-center">
                                                    <blockquote class="mb-5">
                                                        <p>&ldquo;{testimonial.content}&rdquo;</p>
                                                    </blockquote>

                                                    <div class="author-info">
                                                        <div class="author-pic">
                                                            <img src={import.meta.env.VITE_API_URL + testimonial.image} alt="Maria Jones" class="img-fluid" />
                                                        </div>
                                                        <h3 class="font-weight-bold">{testimonial.author_name}</h3>
                                                        <span class="position d-block mb-3">{testimonial.author_position}, {testimonial.author_company}</span>
                                                    </div>
                                                </div>
                                            ))}

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Testimonial Slider --> */}

            {/* <!-- Start Blog Section --> */}
            <div class="blog-section">
                <div class="container">
                    <div class="row mb-5">
                        <div class="col-md-6">
                            <h2 class="section-title">Blog Reciente</h2>
                        </div>
                        <div class="col-md-6 text-start text-md-end">
                            <Link to="/blog" class="more">Ver Todos los Posts</Link>
                        </div>
                    </div>

                    <div class="row">
                        {blogsData.map((blog) => (
                            <div key={blog._id} class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                                <div class="post-entry">
                                    <a href="#" class="post-thumbnail"><img src={ import.meta.env.VITE_API_URL + blog.image } alt="Imagen" class="img-fluid" /></a>
                                    <div class="post-content-entry">
                                        <h3><a href="#">{ blog.title }</a></h3>
                                        <div class="meta">
                                            <span>por <a href="#">{ blog.author }</a></span>
                                            <span>el <a href="#">{ formatDate(blog.publish_date) }</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <!-- End Blog Section -->	 */}
        </>
    );
}

export default HomePage;