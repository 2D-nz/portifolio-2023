import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Nav() {
	const [sideNavOn, setSideNav] = useState(0);

	return (
		<div className="flex justify-end text-violet-400">
			<ul className=" hidden text-violet-700  md:flex space-x-4 py-10">
				<li className="hover:text-violet-400 transition-colors">
					{" "}
					<a href="#about"> Sobre </a>
				</li>
				<li className=" transition-colors hover:text-violet-400">
					{" "}
					<a href="#projects"> Projetos </a>{" "}
				</li>
			</ul>
			<div className="md:invisible px-5 py-5">
				<FontAwesomeIcon
					icon={faBars}
					size="2x"
					onClick={() => setSideNav(60)}
				/>
			</div>
			<div className="sidenav" style={{ width: sideNavOn + "vw" }}>
				<FontAwesomeIcon
					icon={faXmark}
					onClick={() => setSideNav(0)}
					size="2x"
					className="xMarkPosition active:text-zinc-600 text-zinc-900"
				/>

				<ul className="mt-10 px-10 text-slate-900 ">
					<li className="my-5 active:text-zinc-700">
						{" "}
						<a href="#about" onClick={() => setSideNav(0)}>
							{" "}
							Sobre{" "}
						</a>{" "}
					</li>
					<a href="#projects" onClick={() => setSideNav(0)}>
						{" "}
						Projetos{" "}
					</a>{" "}
				</ul>
			</div>
		</div>
	);
}

export default Nav;
