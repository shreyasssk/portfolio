import About from './About';
import Projects from './Projects';
import DevOps from './Devops';
import Experience from './Experience';
import Courses from './Courses';
import Information from './Information';
import Skills from './Skills';
import Education from './Education';
import Blog from './Blog';

const Home = () => {
	return (
		<div className="container sections-wrapper py-5">
			<div className="row">
				<div className="primary col-lg-8 col-12">
					<About />
					<Projects />
					<DevOps />
					<Experience />
					<Courses />
				</div>
				<div className="secondary col-lg-4 col-12">
					<Information />
					<Skills />
					<Education />
					<Blog />
				</div>
			</div>
		</div>
	);
};

export default Home;
