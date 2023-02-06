import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { CookiesProvider } from "react-cookie";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import NotificationContextProvider from "../components/Contexts/NotificationContext";
import UserContextProvider from "../components/Contexts/UserContext";
import SideNavContextProvider from "components/Contexts/SideNavContext";
import ComplaintContextProvider from "./../components/Contexts/ComplaintContext";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps, router }: AppProps) {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<AnimatePresence exitBeforeEnter>
				<GoogleOAuthProvider clientId="805243689186-pe7uljmhc6i38mpvehe4o768ll6nomd4.apps.googleusercontent.com">
					<CookiesProvider>
						<NotificationContextProvider>
							<UserContextProvider>
								<ComplaintContextProvider>
									<SideNavContextProvider>
										<Component
											{...pageProps}
											key={router.route}
										/>
									</SideNavContextProvider>
								</ComplaintContextProvider>
							</UserContextProvider>
						</NotificationContextProvider>
					</CookiesProvider>
				</GoogleOAuthProvider>
			</AnimatePresence>
		</QueryClientProvider>
	);
}

export default MyApp;
