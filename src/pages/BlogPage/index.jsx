import { useEffect, useState } from 'react';
import api from '../../services/api';

function BlogPage() {
	const [testimonialsData, setTestimonialsData] = useState([]);
	const [blogsData, setBlogsData] = useState([]);

	useEffect(() => {
		api.getTestimonials()
			.then(response => {
				setTestimonialsData(response.data);
			})
			.catch(error => {
				console.error('Error al obtener testimonios:', error);
			});
		api.getBlogs()
			.then(response => {
				setBlogsData(response.data);
			})
			.catch(error => {
				console.error('Error al obtener blogs:', error);
			});
	}, []);

	function formatDate(dateString) {
		const options = { day: 'numeric', month: 'long', year: 'numeric' };
		const date = new Date(dateString);
		return date.toLocaleDateString('es-ES', options).replace('.', '');
	}

	return (
		<>
			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Blog</h1>
								<p className="mb-4">Descubre artículos sobre diseño de interiores, consejos útiles y más.</p>
								<p><a href="" className="btn btn-secondary me-2">Ver ahora</a><a href="#" className="btn btn-white-outline">Explorar</a></p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src="images/couch.png" className="img-fluid" alt="Imagen de blog" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="blog-section">
				<div className="container">
					<div className="row">
						{blogsData.map((blog) => (
							<div key={blog._id} className="col-12 col-sm-6 col-md-4 mb-5">
								<div className="post-entry">
									<a href="#" className="post-thumbnail"><img src={import.meta.env.VITE_API_URL + blog.image} alt="Imagen del artículo" className="img-fluid" /></a>
									<div className="post-content-entry">
										<h3><a href="#">{blog.title}</a></h3>
										<div className="meta">
											<span>por <a href="#">{blog.author}</a></span> <span>el <a href="#">{formatDate(blog.publish_date)}</a></span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

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
																<img src={import.meta.env.VITE_API_URL + testimonial.image} alt={testimonial.author_name} className="img-fluid" />
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

export default BlogPage;
