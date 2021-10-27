import './styles.css';
import data from './coursesData.json';

const CoursesTemplate = ({ title, desc }) => {
	return (
		<div>
			<h4 style={{ marginBottom: '0px' }}>{title}</h4>
			<p style={{ marginBottom: '10px' }}>{desc}</p>
		</div>
	);
};

const Courses = () => {
	return (
		<div className="section">
			<div className="card">
				<div className="card-body">
					<h2 className="courses" style={{ color: '#545e69' }}>
						Courses / Certifications
					</h2>
					<div className="card-text">
						{data.map((i) => {
							return (
								<CoursesTemplate
									title={i.title}
									desc={i.desc}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Courses;
