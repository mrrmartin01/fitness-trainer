import { Outlet } from "react-router-dom";
import Header from "./Header";

function Home() {
  return (
    <div className="flex justify-between">
        <div className="w-1/6 h-screen bg-gray-800 p-4 text-white">
        <Header />
        </div>
        <section className="w-5/6 h-screen bg-gray-400 p-4 text-white">
            <Outlet />
        </section>
    </div>

  )
}

export default Home
