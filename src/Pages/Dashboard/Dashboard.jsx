import { useContext } from "react";
import { Pie, PieChart, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";
import AppContext from "../../Context/InstalledAppContext";
import useApp from "../../Hooks/useApp";
import { HashLoader } from "react-spinners";


const Dashboard = () => {
  const { installedApp } = useContext(AppContext);
  const { appData, isLoading } = useApp()

  const uninstalledAppLength = appData.length - installedApp.length;

  const data = [
    { name: "Installed Apps", value: installedApp.length },
    { name: "Uninstalled Apps", value: uninstalledAppLength },
  ];

  const colors = ["#7C4DFF", "#22C55E"];
  if (isLoading) {
    return <div className="flex justify-center items-center py-80"> <HashLoader /> </div>
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-10 text-gray-800">
        Apps Installation Overview
      </h1>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={120}
            outerRadius={160}
            paddingAngle={5}
            cornerRadius={10}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}
          </Pie>

          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;