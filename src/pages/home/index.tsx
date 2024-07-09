import { Helmet } from "react-helmet";

import { Header } from "_components/Header";
import { ThemeToggle } from "_components/ThemeToggle";

import { CharacterList } from "./components/CharacterList";

export const Home = () => (
	<>
		<Helmet>
			<title>Marvel Data Viewer - Home</title>
		</Helmet>

		<Header />
		<CharacterList />
		<ThemeToggle />
	</>
);
