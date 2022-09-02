import React from 'react';

const Modal = ({ imgTitle, images = [] }) => {
	images = [
		'images/iot-0.jpg',
		'images/iot-2.jpg',
		'images/iot-3.jpg',
		'images/iot-4.jpg',
		'images/iot-5.jpg',
	];
	return (
		<React.Fragment>
			<button
				type="button"
				className="btn btn-primary"
				data-toggle="modal"
				data-target="#exampleModal"
			>
				Other Projects
			</button>
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div
					className="modal-dialog modal-dialog-centered modal-lg"
					role="document"
				>
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								{imgTitle}
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div
								id="carouselExampleIndicators"
								className="carousel slide"
								data-ride="carousel"
							>
								<ol className="carousel-indicators">
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="0"
										className="active"
									></li>
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="1"
									></li>
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="2"
									></li>
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="3"
									></li>
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="4"
									></li>
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="5"
									></li>
								</ol>
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img
											className="d-block w-100"
											src="images/iot-1.jpg"
											alt="First slide"
										/>
									</div>
									{images.map((i) => {
										return (
											<div
												key={i}
												className="carousel-item"
											>
												<img
													className="d-block w-100"
													src={i}
													alt="Second slide"
												/>
											</div>
										);
									})}
								</div>
								<a
									className="carousel-control-prev"
									href="#carouselExampleIndicators"
									role="button"
									data-slide="prev"
								>
									<span
										className="carousel-control-prev-icon"
										aria-hidden="true"
									></span>
									<span className="sr-only">Previous</span>
								</a>
								<a
									className="carousel-control-next"
									href="#carouselExampleIndicators"
									role="button"
									data-slide="next"
								>
									<span
										className="carousel-control-next-icon"
										aria-hidden="true"
									></span>
									<span className="sr-only">Next</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Modal;
