import NavData from "../data/NavListData";
import { Link } from "react-router-dom";

function NavList() {
  return (
    <>
      {NavData.map((item) => (
        <li key={item._id} className="">
          <Link 
            to={item.url}
            className={`flex gap-1 items-center hover:bg-gray-500 rounded-lg p-4 ${item.active? "bg-gray-500" : ""}
            `}	
            >
            {item.icon && <item.icon  className="mr-4" />}
            <span>{item.name}</span>
          </Link>
        </li>
        
      ))}

    </>
  );
}

export default NavList;