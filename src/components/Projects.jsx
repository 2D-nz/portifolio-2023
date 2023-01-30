import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import projetos from "../assets/projetos";

function Projects() {
	return (
		<div className="md:py-10" id="projects">
			<div className="m-10">
				<h1 className="text-4xl text-violet-500 py-5 projects-h1">
					{" "}
					Projetos{" "}
				</h1>
			</div>
			<div className="md:mx-52 pb-10">
				{projetos.map((projeto) => {
					return (
						<div className="m-10 last:my-0 md:grid grid-cols-2 outline outline-violet-800">
							<div className="  container bg-violet-500 p-5 text-center">
								<h3 className="text-2xl "> {projeto.title} </h3>
								<p className="my-3"> {projeto.description}</p>
								<div className="flex space-x-2 my-2 justify-center">
									{projeto.tecs.map((tecs) => {
										return (
											<p className="bg-zinc-500 rounded-xl p-1 items-center flex hover:bg-zinc-700">
												{tecs}
											</p>
										);
									})}
								</div>
								<div className="justify-center space-x-5 pt-5">
									<a href={projeto.linkGh}>
										{" "}
										<FontAwesomeIcon
											icon={faGithub}
											size="2x"
											className="hover:scale-125 transition-transform"
										/>
									</a>
									<a href={projeto.linkDp}>
										<FontAwesomeIcon
											icon={faArrowUpRightFromSquare}
											size="2x"
											className="hover:scale-125 transition-transform"
										/>
									</a>
								</div>
							</div>
							<img
								src={projeto.image}
								className="img_projetos hidden md:block"
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Projects;
