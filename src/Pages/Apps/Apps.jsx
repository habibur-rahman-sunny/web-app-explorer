import AppCard from "../../UI/Card/AppCard";
import useApp from "../../Hooks/useApp";
import { HashLoader } from "react-spinners";
 
const Apps = () => {
    const {appData, isLoading} = useApp()
    
    return (
        
        <div className="bg-gray-100">
            <section className="max-w-7xl mx-auto py-10 px-4">

            {/* Title Section */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-900">
                    Trending Apps
                </h2>
                <p className="text-gray-500 mt-2">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            {/* Cards */}
            <div>
                {isLoading ?
                    (<div className="flex justify-center items-center py-80"><HashLoader /></div>
                    ) : <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {(appData.map((data, ind) => (
                        <AppCard key={ind} data={data} />
                        )))}
                    </div>}
            </div>
        </section>
        </div>
    )
};

export default Apps;