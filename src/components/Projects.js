import './styles.css';
import ProjectTemplate from './projectTemplate';
import data from './projectData.json';
import Modal from './Modal';

const Projects = () => {
	return (
		<div className="section">
			<div className="card">
				<div className="card-body">
					<h2 style={{ color: '#545e69', paddingBottom: '15px' }}>
						My Projects
					</h2>
					<h4>My Top 3 Projects</h4>
					{data.map((i) => {
						return (
							<ProjectTemplate
								key={i.title}
								githubURL={i.githubURL}
								imageURL={i.imageURL}
								title={i.title}
								desc={i.desc}
							/>
						);
					})}
					<br />
					<a
						href="https://github.com/shreyasssk/"
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-info"
					>
						Find out more!
					</a>
					&nbsp; &nbsp;
					<Modal imgTitle="Other Projects" />
				</div>
			</div>
		</div>
	);
};

export default Projects;
