import './styles.css';

const Skills = () => {
	const WebDevBadges = [
		'React',
		'Angular',
		'Nodejs',
		'Typescript',
		'MongoDB',
		'MySQL',
		'Socket.io',
	];

	const ProgBadges = ['Typescript', 'Python'];

	const DevOps = [
		'Docker',
		'Kubernetes',
		'Jenkins',
		'GitHub Actions',
		'Ansible',
		'Terraform',
		'AWS',
	];

	const AppDev = ['Flutter', 'Dart'];

	const webDev = () => {
		return WebDevBadges.map((i) => {
			return (
				<span key={i}>
					<span
						style={{ marginTop: '5px' }}
						className="badge badge-success"
					>
						{i}
					</span>{' '}
				</span>
			);
		});
	};

	const prog = () => {
		return ProgBadges.map((i) => {
			return (
				<span key={i}>
					<span className="badge badge-success">{i}</span>{' '}
				</span>
			);
		});
	};

	const devops = () => {
		return DevOps.map((i) => {
			return (
				<span key={i}>
					<span
						style={{ marginTop: '5px' }}
						className="badge badge-success"
					>
						{i}
					</span>{' '}
				</span>
			);
		});
	};

	const appDev = () => {
		return AppDev.map((i) => {
			return (
				<span key={i}>
					<span className="badge badge-success">{i}</span>{' '}
				</span>
			);
		});
	};

	return (
		<div className="section">
			<div className="card">
				<div className="card-body">
					<h2 style={{ color: '#545e69' }}>Skills</h2>
					<div className="card-text">
						<h4>Web Dev</h4>
						{webDev()}
					</div>
					<div className="card-text">
						<h4>Programming</h4>
						{prog()}
					</div>
					<div className="card-text">
						<h4>DevOps</h4>
						{devops()}
					</div>
					<div className="card-text">
						<h4>App Dev</h4>
						{appDev()}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
