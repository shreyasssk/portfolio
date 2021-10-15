import './styles.css';

const DevOps = () => {
	const badges = ['Fargate', 'S3', 'EKS', 'Storage', 'Networking'];

	const tagName = () => {
		return badges.map((i) => {
			return (
				<span>
					<span className="badge badge-primary">{i}</span>{' '}
				</span>
			);
		});
	};

	return (
		<div className="section">
			<div className="card">
				<div className="card-body">
					<h2 style={{ color: '#545e69' }}>DevOps</h2>
					<div className="card-text">
						<h3>AWS</h3>
						<p>
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
						<p>
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
			</div>
		</div>
	);
};

export default DevOps;
