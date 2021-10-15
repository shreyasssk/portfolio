import './styles.css';
import { Card, Badge } from 'shards-react';

const DevOps = () => {
	const badges = ['Fargate', 'S3', 'EKS', 'Storage', 'Networking'];

	const tagName = () => {
		return badges.map((i) => {
			return (
				<span>
					<Badge>{i}</Badge>{' '}
				</span>
			);
		});
	};

	return (
		<div className="section">
			<Card>
				<div className="card-body">
					<h2 style={{ color: '#545e69' }}>DevOps</h2>
					<div className="card-text">
						<h3>AWS</h3>
						<p class="summary">
							Provide a brief description of your project. Ut enim
							ad minima veniam, quis nostrum exercitationem ullam
							corporis suscipit laboriosam, nisi ut aliquid ex ea
							commodi consequatu.
							<br />
							<span className="tags">TAGS:</span>
							<br />
							{tagName()}
						</p>
					</div>
					<div className="card-text">
						<h3>AWS</h3>
						<p class="summary">
							Provide a brief description of your project. Ut enim
							ad minima veniam, quis nostrum exercitationem ullam
							corporis suscipit laboriosam, nisi ut aliquid ex ea
							commodi consequatu.
							<br />
							<span className="tags">TAGS:</span>
							<br />
							{tagName()}
						</p>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default DevOps;
