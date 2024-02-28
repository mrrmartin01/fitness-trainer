import { FaHome , FaCompass, FaChartBar   } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BiSolidNotepad } from "react-icons/bi";



const NavData = [
    {'_id': 1, 'name': 'Home', 'url': '', 'active': true, 'icon': FaHome},	
    {'_id': 2, 'name': 'Discover', 'url': 'discover', 'active': false, 'icon':FaCompass },
    {'_id': 3, 'name': 'Personal', 'url': 'personal','active': false, 'icon': BiSolidNotepad},
    {'_id': 4, 'name': 'Daily', 'url': 'daily', 'active': false, 'icon': FaChartBar  },
    {'_id': 5, 'name': 'Settings', 'url': 'Settings','active': false, 'icon': IoMdSettings},   
]

export default NavData;
