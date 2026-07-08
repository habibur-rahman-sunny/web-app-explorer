import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const InstalledAppCard = ({ app, handleUninstallBtn }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm px-6 py-4 md:flex items-center justify-between hover:shadow-md transition">

      <div className="flex items-center gap-5">
        <img
          src={app.image}
          alt={app.title}
          className="w-16 h-16 rounded-xl object-cover bg-gray-200"
        />

        <div>
          <h3 className="text-xl font-semibold text-[#001D3D]">
            {app.title}
          </h3>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">

            {/* downloads */}
            <span className="flex items-center gap-1 text-green-500">
              <MdOutlineFileDownload />
              {app.downloads}
            </span>

            {/* rating */}
            <span className="flex items-center gap-1 text-orange-500">
              <FaStar />
              {app.ratingAvg}
            </span>

            {/* size */}
            <span>
              {app.size} MB
            </span>

          </div>
        </div>
      </div>

      <button
        onClick={() => handleUninstallBtn(app)}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium mt-4 md:mt-0"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledAppCard;