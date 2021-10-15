import './styles.css';
import { Card, Row, Col } from 'shards-react';

const Projects = () => {
	return (
		<div className="section">
			<Card>
				<div className="card-body">
					<h2 style={{ color: '#545e69', paddingBottom: '15px' }}>
						My Projects
					</h2>
					<Row>
						<Col className="col-md-4 col-12">
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
						</Col>
						<Col className="desc col-md-8 col-12">
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
						</Col>
					</Row>
					<Row>
						<Col className="col-md-4 col-12">
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
						</Col>
						<Col className="desc col-md-8 col-12">
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
						</Col>
					</Row>
				</div>
			</Card>
		</div>
	);
};

export default Projects;
