import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowDown,
	faLaptop,
	faMobile,
	faCode,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Home() {
	return (
		<div className="mx-5 my-16 ">
			<h1 className="text-5xl text-violet-500 homeNome ">
				{" "}
				Denis Lima{" "}
				<a href="https://www.linkedin.com/in/denis-silva-82b316190/">
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
			</h1>
			<h2 className="text-zinc-500 text-3xl mt-2"> Desenvolvedor front-end</h2>
			<p className="text-zinc-500 mt-11 text-lg">
				{" "}
				Crio páginas para a web de forma responsiva seguindo (ou construindo)
				seus layouts e funcionalidades
			</p>

			<div className="invisible md:visible m-10 notebook space-x-10 ">
				<FontAwesomeIcon
					icon={faLaptop}
					size="4x"
					className="text-violet-500"
				/>
				<FontAwesomeIcon
					icon={faMobile}
					size="4x"
					className="text-violet-500"
				/>
				<FontAwesomeIcon icon={faCode} size="4x" className="text-violet-500" />
			</div>
			<div className="invisible md:visible flex justify-center m-20">
				<a href="#about" className="">
					<FontAwesomeIcon
						icon={faArrowDown}
						size="4x"
						className="animate-bounce text-violet-500"
					/>
				</a>
			</div>
		</div>
	);
}

export default Home;
