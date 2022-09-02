const ProjectTemplate = ({ githubURL, imageURL, title, desc }) => {
	return (
		<div>
			<div className="row">
				<div className="col-md-4 col-12">
					<div className="card-title">
						<a
							href={githubURL}
							rel="noopener noreferrer"
							target="_blank"
						>
							<img
								className="img-fluid project-image rounded shadow-sm"
								src={imageURL}
								alt=""
							/>
						</a>
					</div>
				</div>
				<div className="desc col-md-8 col-12">
					<div className="card-text">
						<h3 className="title">
							<a
								style={{ color: '#778492' }}
								href={githubURL}
								target="_blank"
								rel="noopener noreferrer"
							>
								{title}
							</a>
						</h3>
						<p className="mb-2">{desc}</p>
						{/* <p>
							<a
								style={{ color: '#3AAA64' }}
								className="more-link"
								href={githubURL}
								target="_blank"
								rel="noopener noreferrer"
							>
								<i class="fas fa-external-link-alt"></i>
								Find out more
							</a>
						</p> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectTemplate;
