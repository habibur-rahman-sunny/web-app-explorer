import { useNavigate, useParams } from "react-router";
import useApp from "../../Hooks/useApp";
import { FaArrowLeft, FaDownload, FaStar } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { HashLoader } from "react-spinners";
import { useContext } from "react";
import AppContext from "../../Context/InstalledAppContext";
import { toast } from "react-toastify";
import useScrollTop from "../../Hooks/useScrollTop";


const AppDetails = () => {
    useScrollTop();
    const { id } = useParams()
    const { appData } = useApp()
    const expectedApp = appData.find(singleAppData => (singleAppData.id == id))


    const { installedApp, setInstalledApp } = useContext(AppContext)
    const navigate = useNavigate(); 

    const handleInstallBtn = () => {

        // cheek if app already exists in installed app
        const alreadyExists = installedApp.some(specificApp => specificApp.id === Number(id));
        if (alreadyExists) {
            toast.error("Already installed");
            return;
        }

        // If not exist set this app in installedApp array
        else {
            setInstalledApp([...installedApp, expectedApp])
            toast.success(`Successfully installed ${expectedApp.title}!`)
        }
    }

    if (!expectedApp) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center">
                <div className="flex justify-center items-center py-80"><HashLoader /></div>
            </div>
        );
    }
    return (
        <div className="bg-gray-100">
            <div className="max-w-6xl mx-auto px-8 py-10">
                {/* Mobile only */}
                <button
                    onClick={() => navigate(-1)}
                    className="md:hidden flex items-center gap-2 mb-4 px-3 py-2 rounded-lg bg-gray-100"
                >
                    <FaArrowLeft />
                </button>
                {/* Top Section */}
                <div className="flex flex-col md:flex-row gap-8 border-b border-gray-200 pb-10">

                    {/* Image */}
                    <div className="w-72 h-72 bg-gray-100 rounded overflow-hidden">
                        <img
                            src={expectedApp.image}
                            alt={expectedApp.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold text-gray-800">
                            {expectedApp.title}
                        </h1>

                        <p className="mt-2 text-gray-500">
                            Developed by{" "}
                            <span className="text-purple-600 font-medium">
                                {expectedApp.companyName}
                            </span>
                        </p>

                        <hr className="my-6 border-gray-200" />

                        {/* Stats */}
                        <div className="flex gap-14">
                            <div>
                                <FaDownload className="text-green-500 text-xl mb-2" />
                                <p className="text-sm text-gray-500">Downloads</p>
                                <h3 className="text-4xl font-bold">
                                    {expectedApp.downloads}
                                </h3>
                            </div>

                            <div>
                                <FaStar className="text-orange-400 text-xl mb-2" />
                                <p className="text-sm text-gray-500">Average Ratings</p>
                                <h3 className="text-4xl font-bold">
                                    {expectedApp.ratingAvg}
                                </h3>
                            </div>

                            <div>
                                <MdReviews className="text-purple-500 text-xl mb-2" />
                                <p className="text-sm text-gray-500">Total Reviews</p>
                                <h3 className="text-4xl font-bold">
                                    {expectedApp.reviews}
                                </h3>
                            </div>
                        </div>

                        {/* Button */}
                        <button onClick={handleInstallBtn} className="mt-8 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-semibold">
                            Install Now ({expectedApp.size} MB)
                        </button>
                    </div>
                </div>

                {/* Description */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Description
                    </h2>

                    <p className="text-gray-500 leading-8 text-lg">
                        {expectedApp.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;