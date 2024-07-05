import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "_styles/global/index.css";
import { BrowserRouter } from "react-router-dom";

import { axeCoreAccessibilityReport } from "_configurations/axe-core/axeCoreAccessibilityReport";
import { Router } from "_routes/router";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<NextUIProvider className="w-full h-full">
			<ThemeProvider attribute="class">
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</ThemeProvider>
		</NextUIProvider>
	</StrictMode>,
);

axeCoreAccessibilityReport();
