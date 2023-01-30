import responsiveNavWMenu from "../assets/dropdown-nav.png";
import todolist from "./todolist.png";
import advicegenerator from "./advicegenerator.png";
import calculator from "./calculator.png";
let projetos = [
	{
		title: "Front End Mentor - Responsive Nav W/ Menu Dropdown",
		description:
			"Site com layout responsivo focado na demonstração do uso de barras de navegação e navegação lateral, alterando a visualização das nav's e sua visualização. Desafio do site Front End Mentor",
		tecs: ["StyledComponents", "React", "HTML"],
		image: responsiveNavWMenu,
		linkGh: "https://github.com/2D-nz/dropdown-nav",
		linkDp: "https://dropdown-nav-six.vercel.app",
	},
	{
		title: "Lista de Afazeres ",
		description:
			"Uma lista de items para se fazer. Adiciona-se ao escrever na barra e o remove quando se clica no item de completado ",
		tecs: ["React", "TailwindCSS", "Javascript"],
		image: todolist,
		linkGh: "https://github.com/2D-nz/lista-de-afazeres",
		linkDp: "https://lista-de-afazeres-woad.vercel.app",
	},
	{
		title: "Gerador de conselhos",
		description:
			"Um componente que gera um conselho aleatório, ao clicar no cubo em seu centro ele recebe um conselho da sua API, cada conselho leva 5 segundos para estar pronto",
		tecs: ["FetchAPI", "Bootstrap", "Javascript"],
		image: advicegenerator,
		linkGh: "https://github.com/2D-nz/fem-advice-generator",
		linkDp: "https://fem-advice-generator-gray.vercel.app",
	},
	{
		title: "Calculadora",
		description:
			"Uma calculadora que realiza as quatro principais operações matemáticas",
		tecs: ["React", "Bootstrap", "Javascript"],
		image: calculator,
		linkGh: "https://github.com/2D-nz/CDW--Calculadora",
		linkDp: "https://cdw-calculadora.vercel.app",
	},
];

export default projetos;
