import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

import { AvailableThemes } from "_styles/themes/available-themes";

export type ThemeInfo = {
	icon: typeof SunIcon;
};

export const THEME_INFO: Record<string, ThemeInfo> = {
	[AvailableThemes.LIGHT]: {
		icon: SunIcon,
	},
	[AvailableThemes.DARK]: {
		icon: MoonIcon,
	},
};
