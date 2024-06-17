import { useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation();

    if (location.pathname === '/login' || location.pathname === '/register') {
        return null;
    }

    return (
        <footer class="footer-section">
            <div class="container relative">

                <div class="sofa-img">
                    <img src="images/sofa.png" alt="Imagen" class="img-fluid" />
                </div>

                <div class="row">
                    <div class="col-lg-8">
                        <div class="subscription-form">
                            <h3 class="d-flex align-items-center">
                                <span class="me-1">
                                    <img src="images/envelope-outline.svg" alt="Imagen" class="img-fluid" />
                                </span>
                                <span>Suscríbete al Boletín</span>
                            </h3>

                            <form action="#" class="row g-3">
                                <div class="col-auto">
                                    <input type="text" class="form-control" placeholder="Introduce tu nombre" />
                                </div>
                                <div class="col-auto">
                                    <input type="email" class="form-control" placeholder="Introduce tu correo electrónico" />
                                </div>
                                <div class="col-auto">
                                    <button class="btn btn-primary">
                                        <span class="fa fa-paper-plane"></span>
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

                <div class="row g-5 mb-5">
                    <div class="col-lg-4">
                        <div class="mb-4 footer-logo-wrap"><a href="#" class="footer-logo">Furni<span>.</span></a></div>
                        <p class="mb-4">Nuestra misión es proporcionar muebles de alta calidad que aporten comodidad y estilo a tu hogar. Con años de experiencia en la industria, nos enorgullece ofrecer productos que cumplen con los más altos estándares de diseño y funcionalidad.</p>

                        <ul class="list-unstyled custom-social">
                            <li><a href="#"><span class="fa fa-brands fa-facebook-f"></span></a></li>
                            <li><a href="#"><span class="fa fa-brands fa-twitter"></span></a></li>
                            <li><a href="#"><span class="fa fa-brands fa-instagram"></span></a></li>
                            <li><a href="#"><span class="fa fa-brands fa-linkedin"></span></a></li>
                        </ul>
                    </div>

                    <div class="col-lg-8">
                        <div class="row links-wrap">
                            <div class="col-6 col-sm-6 col-md-3">
                                <ul class="list-unstyled">
                                    <li><a href="#">Sobre nosotros</a></li>
                                    <li><a href="#">Servicios</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contáctanos</a></li>
                                </ul>
                            </div>

                            <div class="col-6 col-sm-6 col-md-3">
                                <ul class="list-unstyled">
                                    <li><a href="#">Soporte</a></li>
                                    <li><a href="#">Base de conocimientos</a></li>
                                    <li><a href="#">Chat en vivo</a></li>
                                </ul>
                            </div>

                            <div class="col-6 col-sm-6 col-md-3">
                                <ul class="list-unstyled">
                                    <li><a href="#">Empleos</a></li>
                                    <li><a href="#">Nuestro equipo</a></li>
                                    <li><a href="#">Liderazgo</a></li>
                                    <li><a href="#">Política de privacidad</a></li>
                                </ul>
                            </div>

                            <div class="col-6 col-sm-6 col-md-3">
                                <ul class="list-unstyled">
                                    <li><a href="#">Silla Nórdica</a></li>
                                    <li><a href="#">Kruzo Aero</a></li>
                                    <li><a href="#">Silla Ergonómica</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="border-top copyright">
                    <div class="row pt-4">
                        <div class="col-lg-6">
                            <p class="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. Todos los Derechos Reservados. &mdash; Diseñado con amor por <a href="https://untree.co">Untree.co</a> Distribuido por <a href="https://themewagon.com">ThemeWagon</a></p>
                        </div>

                        <div class="col-lg-6 text-center text-lg-end">
                            <ul class="list-unstyled d-inline-flex ms-auto">
                                <li class="me-4"><a href="#">Términos &amp; Condiciones</a></li>
                                <li><a href="#">Política de Privacidad</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
