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
					</div>
					<div className="col-12 col-md-auto">
						<div class="custom-control custom-toggle my-2">
							<input
								type="checkbox"
								id="customToggle2"
								name="customToggle2"
								className="custom-control-input"
							/>
							<label
								className="custom-control-label"
								for="customToggle2"
							>
								Dark mode
							</label>
						</div>
						<br />
						<div className="btn btn-success">
							Download my resume!
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
