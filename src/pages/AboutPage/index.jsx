import { useEffect, useState } from 'react';
import api from '../../services/api';

function AboutPage() {
    const [testimonialsData, setTestimonialsData] = useState([]);
    const [teamMembersData, setTeamMembersData] = useState([]);

    useEffect(() => {
        api.getTestimonials()
            .then(response => {
                setTestimonialsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching testimonials:', error);
            });
        api.getTeamMembers()
            .then(response => {
                setTeamMembersData(response.data);
            })
            .catch(error => {
                console.error('Error fetching team members:', error);
            });
    }, []);

	return (
		<>
			<div class="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>Sobre Nosotros</h1>
								<p class="mb-4">Nuestra misión es ofrecer productos de calidad que mejoren la vida diaria de nuestros clientes. Nos enorgullece la atención al detalle y la satisfacción del cliente.</p>
								<p><a href="" class="btn btn-secondary me-2">Comprar Ahora</a><a href="#" class="btn btn-white-outline">Explorar</a></p>
							</div>
						</div>
						<div class="col-lg-7">
							<div class="hero-img-wrap">
								<img src="images/couch.png" class="img-fluid" alt="Sofá" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="why-choose-section">
				<div class="container">
					<div class="row justify-content-between align-items-center">
						<div class="col-lg-6">
							<h2 class="section-title">Por Qué Elegirnos</h2>
							<p>Nos dedicamos a proporcionar productos de alta calidad con un servicio al cliente excepcional. Nuestro objetivo es hacer que tu experiencia de compra sea lo más placentera posible.</p>

							<div class="row my-5">
								<div class="col-6 col-md-6">
									<div class="feature">
										<div class="icon">
											<img src="images/truck.svg" alt="Envío Rápido y Gratis" class="imf-fluid" />
										</div>
										<h3>Envío Rápido y Gratis</h3>
										<p>Ofrecemos envío gratuito en todos nuestros productos, asegurando que lleguen a tiempo y en perfectas condiciones.</p>
									</div>
								</div>

								<div class="col-6 col-md-6">
									<div class="feature">
										<div class="icon">
											<img src="images/bag.svg" alt="Fácil de Comprar" class="imf-fluid" />
										</div>
										<h3>Fácil de Comprar</h3>
										<p>Nuestra plataforma de compra es intuitiva y fácil de usar, permitiéndote encontrar y comprar lo que necesitas rápidamente.</p>
									</div>
								</div>

								<div class="col-6 col-md-6">
									<div class="feature">
										<div class="icon">
											<img src="images/support.svg" alt="Soporte 24/7" class="imf-fluid" />
										</div>
										<h3>Soporte 24/7</h3>
										<p>Estamos disponibles las 24 horas del día, los 7 días de la semana, para responder a tus preguntas y ayudarte con cualquier problema.</p>
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
								<img src="images/why-choose-us-img.jpg" alt="Por Qué Elegirnos" class="img-fluid" />
							</div>
						</div>

					</div>
				</div>
			</div>
			<div class="untree_co-section">
				<div class="container">

					<div class="row mb-5">
						<div class="col-lg-5 mx-auto text-center">
							<h2 class="section-title">Nuestro Equipo</h2>
						</div>
					</div>
					<div class="row">
						{ teamMembersData.map((teamMember) => (
							<div key={teamMember._id} class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
								<img src={import.meta.env.VITE_API_URL + teamMember.image} class="img-fluid mb-5" alt="Lawson Arnold" />
								<h3><a href="#"><span class="">{teamMember.first_name}</span> {teamMember.last_name}</a></h3>
								<span class="d-block position mb-4">{teamMember.position}.</span>
								<p>{teamMember.bio}</p>
								<p class="mb-0"><a href="#" class="more dark">Más Información <span class="icon-arrow_forward"></span></a></p>
							</div>
						))}
					</div>
				</div>
			</div>

			<div class="testimonial-section before-footer-section">
				<div class="container">
					<div class="row">
						<div class="col-lg-7 mx-auto text-center">
							<h2 class="section-title">Testimonios</h2>
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
																<img src={import.meta.env.VITE_API_URL + testimonial.image} alt={testimonial.author_name} class="img-fluid" />
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
		</>
	);
};

export default AboutPage;
