import './NavBar.css';

const NavBar = () => {
	return (
		<div className="card header">
			<div className="container">
				<div className="row align-items-center">
					<div className="col">
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
									<a
										href="https://twitter.com/shreyasssk"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fab fa-twitter"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a
										href="https://www.linkedin.com/in/shreyasssk/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fab fa-linkedin-in"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a
										href="https://github.com/shreyasssk"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fab fa-github"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-12 col-md-auto">
						<a
							href="https://drive.google.com/uc?export=download&id=13bTJseYu16nIurv3arF7HMHeEEfzsolF"
							download
							className="btn btn-success"
						>
							Download my resume!
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
