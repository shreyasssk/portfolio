import './styles.css';
import { Card } from 'shards-react';

const Information = () => {
	return (
		<div>
			<Card>
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
						</ul>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default Information;
