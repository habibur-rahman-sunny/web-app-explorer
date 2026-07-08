import { useState } from "react";
import AppContext from "./InstalledAppContext";


const InstalledAppProvider = ({children}) => {

    const [installedApp, setInstalledApp] = useState([])
    const data = {
        installedApp,
        setInstalledApp,
    }
    return (
            <AppContext.Provider value={data}>
                {children}
            </AppContext.Provider>
    );
};

export default InstalledAppProvider;