import { useState } from "react";
import NavData from "../data/NavListData";
import { Link } from "react-router-dom";
import ProfilePic from "./ProfilePic";
import { SiOpenaigym } from "react-icons/si";

function NavList() {
  const [navItems, setNavItems] = useState(NavData);

  const handleClick = (id) => {
    const updatedNavItems = navItems.map((item) =>
      item._id === id ? { ...item, active: true } : { ...item, active: false }
    );
    setNavItems(updatedNavItems);
  };

  return (
    <>
      <ProfilePic />
      <div className="flex  justify-center text-center tracking-wider mt-[-20px] font-bold">
        <span className=" text-sky-500">MiTrainer</span>
        <span className="pl-2  text-3xl">
          <SiOpenaigym />
        </span>
      </div>
      {navItems.map((item) => (
        <li key={item._id} className="">
          <Link
            to={item.url}
            className={`flex gap-1 items-center hover:bg-gray-500 rounded-lg p-4 ${
              item.active ? "bg-gray-500" : ""
            }`}
            onClick={() => handleClick(item._id)}
          >
            {item.icon && <item.icon className="mr-4" />}
            <span>{item.name}</span>
          </Link>
        </li>
      ))}
    </>
  );
}

export default NavList;
