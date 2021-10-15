import './NavBar.css';
import { Container, Row, Col, Button, FormCheckbox, Card } from 'shards-react';
import { useState } from 'react';

const NavBar = () => {
	const [checked, setChecked] = useState(false);

	const handleToggle = () => {
		setChecked(!checked);
	};

	return (
		<Card className="header">
			<Container>
				<Row className="align-items-center">
					<Col>
						<img
							src="profile.png"
							alt="profile-pic"
							className="profile-image img-fluid float-start rounded-circle"
						/>

						<div className="profile-content">
							<h1 className="name">Shreyas Shivakumar</h1>
							<h2 className="desc">
								Web Developer | Dev Ops | App Developer
							</h2>
							<ul className="social list-inline">
								<li className="list-inline-item">
									<a href="google.com">
										<i class="fab fa-twitter"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a href="google.com">
										<i class="fa fa-linkedin-in"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a href="google.com">
										<i class="fa fa-github-alt"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a href="google.com">
										<i class="fa fa-stack-overflow"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a href="google.com">
										<i class="fa fa-user"></i>
									</a>
								</li>
							</ul>
						</div>
					</Col>
					<Col className="col-12 col-md-auto">
						<FormCheckbox
							toggle
							small
							checked={checked}
							onChange={handleToggle}
						>
							Dark Mode
						</FormCheckbox>
						<br />
						<Button theme="success">Download my resume!</Button>
					</Col>
				</Row>
			</Container>
		</Card>
	);
};

export default NavBar;
