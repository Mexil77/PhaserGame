import { useEffect } from "react";
import "./App.css";
import phaserGame from "./PhaserGame";

function App() {
	useEffect(() => {
		const scene = phaserGame;
	});
	return (
		<div className="App">
			<h1>Juego</h1>
			<div id="phaser-container"></div>
		</div>
	);
}

export default App;
