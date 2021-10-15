import './styles.css';

const Education = () => {
	return (
		<div className="section">
			<div className="card">
				<div className="card-body">
					<h2 style={{ color: '#545e69' }}>Education</h2>
					<div className="education card-text">
						<h5>
							<i className="grad-cap fas fa-graduation-cap"></i>
							B.E. Computer Science
						</h5>
						<p>K.L.S Gogte Institute of Technology (2018-2022)</p>
					</div>
					<div className="education card-text">
						<h5>
							<i className="grad-cap fas fa-graduation-cap"></i>
							P.U.C
						</h5>
						<p>K.L.S Gogte College of Science (2016-2018)</p>
					</div>
					<div className="education card-text">
						<h5>
							<i className="grad-cap fas fa-graduation-cap"></i>
							S.S.L.C
						</h5>
						<p>St. Paul's High School (2016)</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;
