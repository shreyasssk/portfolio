import './styles.css';
import { Card } from 'shards-react';

const About = () => {
	return (
		<div className="section">
			<Card>
				<div className="card-body">
					<h2 style={{ color: '#545e69' }}>About Me</h2>
					<div className="card-text">
						Write a brief intro about yourself. It's a good idea to
						include your personal interests and hobbies as well.
						Lorem ipsum dolor sit amet, consectetuer adipiscing
						elit. Aenean commodo ligula eget dolor. Aenean massa.
						Cum sociis natoque penatibus et magnis dis parturient
						montes, nascetur ridiculus mus. Donec quam felis,
						ultricies nec. Commodo ligula eget dolor. Aenean massa.
					</div>
				</div>
			</Card>
		</div>
	);
};

export default About;
