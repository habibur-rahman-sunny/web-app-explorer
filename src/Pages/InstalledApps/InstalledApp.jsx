import { useContext, useState } from "react";
import AppContext from "../../Context/InstalledAppContext";
import { toast } from "react-toastify";
import InstalledAppCard from "../../UI/Card/installedAppCard";
import AppNotFound from "../../ErrorElement/AppNotFound";

const InstalledApp = () => {
  const { installedApp, setInstalledApp } = useContext(AppContext);

  // {Sorting functionality}
  const [sortingType, setSortingType] = useState("size")
  let sortedApps = [...installedApp]
  if (sortingType === "size") {
    sortedApps.sort((a, b) => parseFloat(b.size) - parseFloat(a.size));
  }
  if (sortingType === "rating") {
    sortedApps.sort((a, b) => b.ratingAvg - a.ratingAvg);
  }


  const handleUninstallBtn = (app) => {
    let filteredApp = installedApp.filter(clickedApp => clickedApp.id != app.id)
    setInstalledApp(filteredApp)
    toast.warning(`uninstall ${app.title}!`)
  }

  return (
    <div className="min-h-screen bg-gray-100 px-8 py-12">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-[#001D3D] mb-4">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 text-lg">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Top bar */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-[#001D3D]">
          {installedApp.length} Apps Found
        </h2>

        <select onChange={(e) => setSortingType(e.target.value)} className="border px-4 py-2 rounded-lg text-gray-600 bg-white">
          <option value={"size"}>Sort By Size</option>
          <option value={"rating"}>Sort By Rating</option>
        </select>
      </div>

      {/* Installed Apps List */}
      <div className="space-y-4">
        {installedApp.length === 0 ? (<AppNotFound title="OPPS!! NO INSTALLED APPS"
  message="You haven't installed any apps yet."></AppNotFound>
        ) : (
          sortedApps.map((app, ind) => (
            <InstalledAppCard key={ind} app={app} handleUninstallBtn={handleUninstallBtn}></InstalledAppCard>
          )))
        }
      </div>
    </div>
  );
};

export default InstalledApp;