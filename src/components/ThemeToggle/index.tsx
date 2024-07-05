import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { ReactElement, useCallback, useMemo } from "react";

import { AvailableThemes, DEFAULT_THEME } from "_styles/themes";

import { THEME_INFO } from "./constants/theme-info";

export const ThemeToggle = (): ReactElement => {
	const { setTheme, theme = DEFAULT_THEME, systemTheme = DEFAULT_THEME } = useTheme();

	const currentTheme = theme === AvailableThemes.SYSTEM ? systemTheme : theme;
	const { icon: ThemeIcon } = useMemo(() => THEME_INFO[currentTheme], [currentTheme]);

	const handleToggleTheme = useCallback(() => {
		setTheme(currentTheme === AvailableThemes.LIGHT ? AvailableThemes.DARK : AvailableThemes.LIGHT);
	}, [currentTheme, setTheme]);

	return (
		<motion.div
			className="fixed bottom-4 right-4"
			whileTap={{ scale: 0.9 }}
			whileHover={{ scale: 1.2 }}
			transition={{ type: "spring", stiffness: 400, damping: 17 }}
		>
			<Button isIconOnly variant="faded" onClick={handleToggleTheme} aria-label="Toggle theme button">
				<ThemeIcon className="size-4 light:text-black dark:text-white " />
			</Button>
		</motion.div>
	);
};
