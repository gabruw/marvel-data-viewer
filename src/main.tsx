import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "_styles/global/index.css";
import { BrowserRouter } from "react-router-dom";

import { ApiProvider } from "_components/ApiProvider";
import { Backdrop } from "_components/Backdrop";
import { axeCoreAccessibilityReport } from "_configurations/axe-core/axeCoreAccessibilityReport";
import { Router } from "_routes/router";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Suspense fallback={<Backdrop />}>
			<NextUIProvider className="w-full h-full">
				<ThemeProvider attribute="class">
					<ApiProvider>
						<BrowserRouter>
							<Router />
						</BrowserRouter>
					</ApiProvider>
				</ThemeProvider>
			</NextUIProvider>
		</Suspense>
	</StrictMode>,
);

axeCoreAccessibilityReport();
