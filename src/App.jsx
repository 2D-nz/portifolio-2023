import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
	return (
		<div className=" bg-zinc-900">
			<div className="h-screen">
				<Nav />
				<Home />
			</div>
			<About />
			<Projects />
		</div>
	);
}

export default App;
