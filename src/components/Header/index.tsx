import { Image } from "@nextui-org/react";

import Logo from "_assets/images/logo.webp";

export const Header = () => {
	return (
		<header className="border-b border-b-slate/10 border-orange-500 dark:border-orange-600">
			<nav className="px-4 lg:px-6 py-2.5 bg-sky-500/90 dark:bg-sky-800/90">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
					<a href="/home" className="flex items-center">
						<Image className="mr-3 h-6 sm:h-9" src={Logo} alt="Marvel Data Viewer logo" />

						<span className="self-center text-xl font-semibold whitespace-nowrap text-orange-500 dark:text-orange-600">
							Marvel Data Viewer
						</span>
					</a>
				</div>
			</nav>
		</header>
	);
};
