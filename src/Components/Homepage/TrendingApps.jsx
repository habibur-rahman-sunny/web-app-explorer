
import AppCard from "../../UI/Card/AppCard";
import { Link } from "react-router";
import { HashLoader } from "react-spinners";
import useApp from "../../Hooks/useApp";

const TrendingApps = () => {
    const {appData, isLoading} = useApp()
    return (
        <section className="max-w-7xl mx-auto px-4 py-24">

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
                    (<div className="flex justify-center items-center py-24"> <HashLoader /> </div>
                    ) : <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {(appData.slice(0, 8).map((data) => (
                        <AppCard key={data.id} data={data} />
                        )))}
                    </div>}
            </div>
            <div className="text-center py-10">
                <Link to={"/apps"}>
                    <button className="btn bg-purple-500 text-white">see more</button>
                </Link>
            </div>
        </section>

    );

};

export default TrendingApps;