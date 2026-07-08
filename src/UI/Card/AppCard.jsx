import { Link } from "react-router";

const AppCard = ({ data }) => {
    return (
        <Link to={`/app/details/${data.id}`} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">

            {/* Image */}
            <div className="h-40 sm:h-52 p-1 sm:p-3 bg-gray-100 flex items-center justify-center">
                <img
                    src={data.image}
                    alt={data.title}
                    className="w-32 h-32 object-cover rounded-xl"
                />
            </div>

            {/* Content */}
            <div className="p-2 sm:p-4">

                {/* Title */}
                <h3 className="text-sm sm:text-lg font-semibold text-gray-800 truncate">
                    {data.title}
                </h3>

                {/* Bottom Info */}
                <div className="hidden sm:flex justify-between items-center text-sm">

                    {/* Downloads */}
                    <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-lg ">

                        <span>{data.downloads}</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 bg-orange-50 text-orange-500 px-2 py-1 rounded-lg">

                        <span>{data.ratingAvg}</span>
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default AppCard;