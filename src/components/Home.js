import { Container, Row, Col } from 'shards-react';
import About from './About';
import Projects from './Projects';
import DevOps from './Devops';
import Experience from './Experience';
import Courses from './Courses';
import Information from './Information';

const Home = () => {
	return (
		<Container className="sections-wrapper py-5">
			<Row>
				<Col className="primary col-lg-8 col-12">
					<About />
					<Projects />
					<DevOps />
					<Experience />
					<Courses />
				</Col>
				<Col className="secondary col-lg-4 col-12">
					<Information />
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
