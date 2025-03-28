import Header from "@/components/Header";
import DashboardContent from "./components/DashboardContent";

const Dashboard = () => {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">
            Dashboard
          </h1>
        </div>
      </Header>
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
