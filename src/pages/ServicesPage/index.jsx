import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

function ServicesPage() {
    const [testimonialsData, setTestimonialsData] = useState([]);
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        api.getTestimonials()
            .then(response => {
                setTestimonialsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching testimonials:', error);
            });
        api.getProducts()
            .then(response => {
                setProductsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Servicios</h1>
                                <p className="mb-4">Descubre nuestros servicios de primera categoría, diseñados para ofrecerte una experiencia inigualable. Con nosotros, siempre estarás en buenas manos.</p>
                                <p><a href="#shop" className="btn btn-secondary me-2">Comprar Ahora</a><a href="#explore" className="btn btn-white-outline">Explorar</a></p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                <img src="images/couch.png" className="img-fluid" alt="Couch" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="why-choose-section">
                <div className="container">
                    <div className="row my-5">
                        <div className="col-6 col-md-6 col-lg-3 mb-4">
                            <div className="feature">
                                <div className="icon">
                                    <img src="images/truck.svg" alt="Envío Rápido y Gratis" className="img-fluid" />
                                </div>
                                <h3>Envío Rápido y Gratis</h3>
                                <p>Disfruta de nuestros envíos rápidos y sin costo adicional. Tu pedido llegará a tiempo, siempre.</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-lg-3 mb-4">
                            <div className="feature">
                                <div className="icon">
                                    <img src="images/bag.svg" alt="Fácil de Comprar" className="img-fluid" />
                                </div>
                                <h3>Fácil de Comprar</h3>
                                <p>Navega y compra con facilidad en nuestra tienda en línea. Hemos simplificado cada paso para ti.</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-lg-3 mb-4">
                            <div className="feature">
                                <div className="icon">
                                    <img src="images/support.svg" alt="Soporte 24/7" className="img-fluid" />
                                </div>
                                <h3>Soporte 24/7</h3>
                                <p>Estamos aquí para ayudarte en cualquier momento. Nuestro equipo de soporte está disponible las 24 horas del día.</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-lg-3 mb-4">
                            <div className="feature">
                                <div className="icon">
                                    <img src="images/return.svg" alt="Devoluciones Sin Complicaciones" className="img-fluid" />
                                </div>
                                <h3>Devoluciones Sin Complicaciones</h3>
                                <p>Si no estás satisfecho con tu compra, ofrecemos un proceso de devolución sencillo y sin estrés.</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-lg-3 mb-4">
                            <div className="feature">
                                <div className="icon">
                                    <img src="images/truck.svg" alt="Envío Rápido y Gratis" className="img-fluid" />
                                </div>
                                <h3>Envío Rápido y Gratis</h3>
                                <p>Disfruta de nuestros envíos rápidos y sin costo adicional. Tu pedido llegará a tiempo, siempre.</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-lg-3 mb-4">
                            <div className="feature">
                                <div className="icon">
                                    <img src="images/bag.svg" alt="Fácil de Comprar" className="img-fluid" />
                                </div>
                                <h3>Fácil de Comprar</h3>
                                <p>Navega y compra con facilidad en nuestra tienda en línea. Hemos simplificado cada paso para ti.</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-lg-3 mb-4">
                            <div className="feature">
                                <div className="icon">
                                    <img src="images/support.svg" alt="Soporte 24/7" className="img-fluid" />
                                </div>
                                <h3>Soporte 24/7</h3>
                                <p>Estamos aquí para ayudarte en cualquier momento. Nuestro equipo de soporte está disponible las 24 horas del día.</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-lg-3 mb-4">
                            <div className="feature">
                                <div className="icon">
                                    <img src="images/return.svg" alt="Devoluciones Sin Complicaciones" className="img-fluid" />
                                </div>
                                <h3>Devoluciones Sin Complicaciones</h3>
                                <p>Si no estás satisfecho con tu compra, ofrecemos un proceso de devolución sencillo y sin estrés.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <!-- Inicio de la sección de productos --> */}
            <div className="product-section">
                <div className="container">
                    <div className="row">

                        {/* <!-- Inicio de la columna 1 --> */}
                        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                            <h2 className="mb-4 section-title">Fabricado con materiales de excelente calidad.</h2>
                            <p className="mb-4">Nuestra colección combina estética y durabilidad para ofrecer productos que no solo embellecen tu hogar, sino que también resisten el paso del tiempo.</p>
                            <p><Link to="/shop" className="btn">Explorar</Link></p>
                        </div>
                        {/* <!-- Fin de la columna 1 --> */}

                        {/* <!-- Inicio de la columna 2 --> */}
                        {productsData.map((product) => (
                            <div key={product._id} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                                <Link className="product-item" to={`/product/${product._id}`}>
                                    <img src={import.meta.env.VITE_API_URL + product.image} className="img-fluid product-thumbnail" alt={product.name} />
                                    <h3 className="product-title">{product.name}</h3>
                                    <strong className="product-price">${product.price}</strong>

                                    <span className="icon-cross">
                                        <img src="images/cross.svg" className="img-fluid" alt="Cross" />
                                    </span>
                                </Link>
                            </div>
                        ))}
                        {/* <!-- Fin de la columna 2 --> */}

                    </div>
                </div>
            </div>
            {/* <!-- Fin de la sección de productos --> */}

            <div className="testimonial-section before-footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto text-center">
                            <h2 className="section-title">Testimonios</h2>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="testimonial-slider-wrap text-center">

                                <div id="testimonial-nav">
                                    <span className="prev" data-controls="prev"><span className="fa fa-chevron-left"></span></span>
                                    <span className="next" data-controls="next"><span className="fa fa-chevron-right"></span></span>
                                </div>

                                <div className="testimonial-slider">
                                    {testimonialsData.map((testimonial) => (
                                        <div key={testimonial._id} className="item">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-8 mx-auto">
                                                    <div className="testimonial-block text-center">
                                                        <blockquote className="mb-5">
                                                            <p>&ldquo;{testimonial.content}&rdquo;</p>
                                                        </blockquote>

                                                        <div className="author-info">
                                                            <div className="author-pic">
                                                                <img src={import.meta.env.VITE_API_URL
                                                                    + testimonial.image} alt={testimonial.author_name} className="img-fluid" />
                                                            </div>
                                                            <h3 className="font-weight-bold">{testimonial.author_name}</h3>
                                                            <span className="position d-block mb-3">{testimonial.author_position}, {testimonial.author_company}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesPage;