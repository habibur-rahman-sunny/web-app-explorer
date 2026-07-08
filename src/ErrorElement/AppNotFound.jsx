import { Link } from "react-router";

const AppNotFound = ({ title, message }) => {
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center">
            <img
                src="/images/App-Error.png"
                alt="Not Found"
                className="w-72 mb-8"
            />

            <h2 className="text-4xl font-bold text-[#001D3D] mb-4">
                {title}
            </h2>

            <p className="text-gray-500 text-lg max-w-xl">
                {message}
            </p>
            <Link to="/apps">
                <button className="btn mt-6 bg-[#7C4DFF] hover:bg-[#6c3df5] text-white border-none px-6">
                    Go Back Apps
                </button>
            </Link>
        </div>
    );
};

export default AppNotFound;