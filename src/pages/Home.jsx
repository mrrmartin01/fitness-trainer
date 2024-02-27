import { Outlet } from "react-router-dom";
import Header from "./Header";

function Home() {
  return (
    <div className="flex">
      <div className="fixed left-0 top-0 w-1/6 h-screen bg-gray-800 p-4 text-white">
        <Header />
      </div>
      <section className="ml-[16.5%] flex-grow h-screen bg-gray-400 p-4 text-white">
        <div className="ml-1/6">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default Home;
