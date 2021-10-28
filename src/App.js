import Home from './components/Home';
import NavBar from './components/NavBar';

const App = () => {
	return (
		<div>
			{/* <div className="alert alert-dark">
				<h1>This website is still under development</h1>
			</div> */}
			<NavBar />
			<Home />
		</div>
	);
};

export default App;
