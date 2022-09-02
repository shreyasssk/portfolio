import './styles.css';
import data from './devopsData.json';

const DevOpsTemplate = ({ title, desc, tags }) => {
	const tagName = () => {
		return tags.map((i) => {
			return (
				<span key={i}>
					<span className="badge badge-primary">{i}</span>{' '}
				</span>
			);
		});
	};
	return (
		<div className="card-text">
			<h3>{title}</h3>
			<p>
				{desc}
				<br />
				<span className="tags">TAGS:</span>
				<br />
				{tagName()}
			</p>
		</div>
	);
};

const DevOps = () => {
	return (
		<div className="section">
			<div className="card">
				<div className="card-body">
					<h2 style={{ color: '#545e69' }}>DevOps</h2>
					{data.map((i) => {
						return (
							<DevOpsTemplate
								key={i.title}
								title={i.title}
								desc={i.desc}
								tags={i.tags}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default DevOps;
