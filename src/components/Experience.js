import './styles.css';
import data from './experienceData.json';

const ExperienceTemplate = ({ title, desc }) => {
	return (
		<div className="card-text">
			<h3>{title}</h3>
			<p>{desc}</p>
		</div>
	);
};

const Experience = () => {
	return (
		<div className="section">
			<div className="card">
				<div className="card-body">
					<h2 style={{ color: '#545e69' }}>Experience</h2>
					{data.map((i) => {
						return (
							<ExperienceTemplate
								key={i.title}
								title={i.title}
								desc={i.desc}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Experience;
