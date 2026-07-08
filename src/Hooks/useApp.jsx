import { useEffect, useState } from "react";

const useApp = () => {
    const [appData, setAppData] = useState([]);
        const [isLoading, setIsLoading] = useState(true)

        
        useEffect(() => {
            const dataFetching = async () => {
                const res = await fetch("/data.json")
                const appData = await res.json()
                setTimeout(() => {
                    setAppData(appData);
                    setIsLoading(false)
                }, 500);
            }
            dataFetching()
        }, [])
        return{appData, isLoading}
};

export default useApp;