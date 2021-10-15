import './styles.css';
import { Card } from 'shards-react';

const Courses = () => {
	return (
		<div className="section">
			<Card>
				<div className="card-body">
					<h2 className="courses" style={{ color: '#545e69' }}>
						Courses / Certifications
					</h2>
					<div className="card-text">
						<h4 style={{ marginBottom: '0px' }}>
							AWS Solutions Architect
						</h4>
						<p style={{ marginBottom: '10px' }}>
							Author: Stephen Maarek
						</p>
						<h4 style={{ marginBottom: '0px' }}>
							Kubernetes Administrator Course
						</h4>
						<p style={{ marginBottom: '10px' }}>
							Offered by KodeKloud on Udemy
						</p>
						<h4 style={{ marginBottom: '0px' }}>
							AWS EKS Masterclass
						</h4>
						<p style={{ marginBottom: '10px' }}>
							Offered by Stack Simplify on Udemy
						</p>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default Courses;
