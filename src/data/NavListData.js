import { FaHome , FaTachometerAlt} from "react-icons/fa";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaDumbbell } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";


const NavData = [
    {'_id': 1, 'name': 'Home', 'url': '', 'active': true, 'icon': FaHome},	
    {'_id': 2, 'name': 'About', 'url': 'about', 'active': false, 'icon':BsFillInfoSquareFill},
    {'_id': 3, 'name': 'Workouts', 'url': 'Workouts','active': false, 'icon': FaDumbbell},
    {'_id': 4, 'name': 'Dashboard', 'url': 'Dashboard', 'active': false, 'icon': FaTachometerAlt},
    {'_id': 5, 'name': 'Settings', 'url': 'Settings','active': false, 'icon': IoMdSettings},   
]

export default NavData;
