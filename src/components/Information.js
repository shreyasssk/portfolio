import './styles.css';

const Information = () => {
	return (
		<div className="section">
			<div className="card">
				<div className="card-body">
					<h2 style={{ color: '#545e69' }}>Contact me</h2>
					<div className="info card-text">
						<ul className="list-unstyled">
							<li>
								<i className="fas fa-map-marker-alt"></i>
								<span className="sr-only">Location:</span>
								Belgaum, Karnataka, India
							</li>
							<li>
								<i className="fas fa-envelope"></i>
								<span className="sr-only">Email:</span>
								<a
									style={{ color: '#3AAA64' }}
									href="mailto: shreyasshvkmr@gmail.com"
								>
									shreyasshvkmr@gmail.com
								</a>
							</li>
							<li>
								<i className="fas fa-phone-alt"></i>
								<span className="sr-only">Phone:</span>
								<a
									style={{ color: '#3AAA64' }}
									href="tel:+91 9008976427"
								>
									+91 9008976427
								</a>
							</li>
							<li>
								<i className="fas fa-github"></i>
								<span className="sr-only">GitHub:</span>
								<a
									style={{ color: '#3AAA64' }}
									href="https://www.github.com/shreyasssk"
								>
									github.com/shreyasssk
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Information;
