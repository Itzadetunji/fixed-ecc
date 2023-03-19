import { createContext, useState } from "react";

export const WebCamContext = createContext();

const WebCamContextProvider = ({ children }) => {
	const [webCamShowing, setWebCamShowing] = useState(false);
	return <WebCamContext.Provider value={{ webCamShowing, setWebCamShowing }}>{children} </WebCamContext.Provider>;
};

export default WebCamContextProvider;
