import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faHtml5,
	faCss3,
	faJs,
} from "@fortawesome/free-brands-svg-icons";

function About() {
	return (
		<div className="bg-violet-500  md:grid md:grid-cols-2" id="about">
			<div className="pt-10 m-10 ">
				<h1 className="text-3xl text-black-700"> Sobre </h1>
				<hr className="bg-black h-1 border-0" />
				<p className="text-lg mt-5">
					{" "}
					Meu nome é Denis, e eu estudo programação há 2 anos.{" "}
				</p>
				<p className="text-lg mt-5">
					{" "}
					Meu interesse em desenvolvimento web surgiu desde 2020 quando comecei
					a estudar por conta própria programação e notei a infinidade de
					possibilidades que se pode construir com o desenvolvimento web,
					podendo dar vida a qualquer ideia
				</p>
			</div>
			<div className="mx-10 my-20 hidden md:block">
				<p className="text-black-700 text-4xl">Tecnologias que utilizo:</p>
				<hr className="bg-black h-1 border-0" />
				<div className="">
					<div className="grid grid-cols-2 ">
						<div className="m-7 group">
							<FontAwesomeIcon
								icon={faReact}
								size="5x"
								className="react-animation ease-in "
							/>
							<p className="text-2xl my-2"> React</p>
						</div>
						<div className="m-7">
							<FontAwesomeIcon
								icon={faJs}
								size="5x"
								className="hover:scale-125 transition-transform"
							/>
							<p className="text-2xl my-2"> Javascript </p>
						</div>
						<div className="m-7">
							<FontAwesomeIcon
								icon={faHtml5}
								size="5x"
								className="hover:scale-125 transition-transform"
							/>
							<p className="text-2xl my-2"> HTML </p>
						</div>
						<div className="m-7">
							<FontAwesomeIcon
								icon={faCss3}
								size="5x"
								className="hover:scale-125 transition-transform"
							/>
							<p className="text-2xl my-2"> CSS</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mx-10 md:hidden ">
				<p className="text-black-700 text-2xl">Tecnologias que utilizo:</p>
				<hr className="bg-black h-1 border-0" />
				<div className="">
					<div className="grid grid-cols-2 ">
						<div className="m-7 group">
							<FontAwesomeIcon
								icon={faReact}
								size="3x"
								className="react-animation ease-in "
							/>
							<p className=""> React</p>
						</div>
						<div className="m-7">
							<FontAwesomeIcon
								icon={faJs}
								size="3x"
								className="hover:scale-125 transition-transform"
							/>
							<p> Javascript </p>
						</div>
						<div className="m-7">
							<FontAwesomeIcon
								icon={faHtml5}
								size="3x"
								className="hover:scale-125 transition-transform"
							/>
							<p> HTML </p>
						</div>
						<div className="m-7">
							<FontAwesomeIcon
								icon={faCss3}
								size="3x"
								className="hover:scale-125 transition-transform"
							/>
							<p> CSS</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
