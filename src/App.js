import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="header">
			<Navbar />
			<Carousel isMobile={true} />
		</div>
	);
}

export default App;
