import './styles.css';

const Projects = () => {
	return (
		<div className="section">
			<div className="card">
				<div className="card-body">
					<h2 style={{ color: '#545e69', paddingBottom: '15px' }}>
						My Projects
					</h2>
					<div className="row">
						<div className="col-md-4 col-12">
							<div className="card-title">
								<a
									href="https://www.github.com"
									rel="noopener noreferrer"
									target="_blank"
								>
									<img
										className="img-fluid project-image rounded shadow-sm"
										src="https://raw.githubusercontent.com/shreyasssk/image-reference/master/system-dashboard.gif"
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
										href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-4-startup-template-for-software-projects/"
										target="_blank"
										rel="noopener noreferrer"
									>
										tickets.dev
									</a>
								</h3>
								<p class="mb-2">
									You can put one of your secondary projects
									here. Suspendisse in tellus dolor. Vivamus a
									tortor eu turpis pharetra consequat quis non
									metus. Aliquam aliquam, orci eu suscipit
									pellentesque, mauris dui tincidunt enim,
									eget iaculis ante dolor non turpis.
								</p>
								<p>
									<a
										style={{ color: '#3AAA64' }}
										class="more-link"
										href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-4-startup-template-for-software-projects/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i class="fas fa-external-link-alt"></i>
										Find out more
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 col-12">
							<div className="card-title">
								<a
									href="https://www.github.com"
									rel="noopener noreferrer"
									target="_blank"
								>
									<img
										className="img-fluid project-image rounded shadow-sm"
										src="https://raw.githubusercontent.com/shreyasssk/image-reference/master/system-dashboard.gif"
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
										href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-4-startup-template-for-software-projects/"
										target="_blank"
										rel="noopener noreferrer"
									>
										tickets.dev
									</a>
								</h3>
								<p class="mb-2">
									You can put one of your secondary projects
									here. Suspendisse in tellus dolor. Vivamus a
									tortor eu turpis pharetra consequat quis non
									metus. Aliquam aliquam, orci eu suscipit
									pellentesque, mauris dui tincidunt enim,
									eget iaculis ante dolor non turpis.
								</p>
								<p>
									<a
										style={{ color: '#3AAA64' }}
										class="more-link"
										href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-4-startup-template-for-software-projects/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i class="fas fa-external-link-alt"></i>
										Find out more
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
