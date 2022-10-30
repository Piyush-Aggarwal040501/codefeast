import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Middle from './components/Middle';
import Todo from './pages/Todo';
import './App.css';
import "./styles/general.css"
// import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


function App() {
	return (
		<div id='parentBox'>
			<div id="box1">
				<Sidebar />
			</div>
			<div id="box2">
				<Navbar />
				<Middle/>
				<Footer />
			</div>
		</div>
	);
}

export default App;
