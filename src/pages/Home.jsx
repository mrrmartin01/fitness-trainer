import { Outlet } from "react-router-dom";
import Header from "./Header";

function Home() {
  return (
    <div className="flex">
      <div className="fixed left-0 top-0 w-1/6 h-screen bg-black p-4 text-white">
        <Header />
      </div>
      <section className="ml-[16.5%] w-2 flex-grow h-full bg-gradient-to-l from-gray-600 to-gray-800 backdrop:blur-sm p-4 text-white">
        <div className="ml-1/6">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default Home;
