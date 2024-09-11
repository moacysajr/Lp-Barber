import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";


export const Route = createRootRoute({
	component: () => (
		<React.Fragment>
		
			<main className='min-h-screen font-sans antialiased pt-10 px-3'>
				<Outlet />
			</main>
			{/* Devtools do Router: */}
			{/*<TanStackRouterDevtools /> */}
		</React.Fragment>
	),
});
