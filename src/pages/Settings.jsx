import Button from "../components/Button";
import ProfilePic from "../components/ProfilePic";
import { IoCloudUploadOutline, IoSync, IoGridSharp, IoPencilSharp   } from "react-icons/io5";
import { IoMdSettings, IoMdWater } from "react-icons/io";
import { FaCrown, FaRegSmile, FaAppStoreIos, FaGlobe, FaStar   } from "react-icons/fa";
import { RiAdvertisementFill } from "react-icons/ri";
import SettingsPath from "../components/SettingsPath";
import SettingsDescib from "../components/SettingsDescib";
import RadioSwitch from "../components/RadioSwitch";

function Settings() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <ProfilePic />
        <Button
          icon={
            <span className="flex flex-start items-center justify-center">
              <IoCloudUploadOutline className="h-7 w-7 pl-1 btnIicons" />
            </span>
          }
          value="Sync Data"
          type="button"
          className="w-[45%] h-12 rounded-full p-2 bg-gradient-to-br from-blue-400 to-blue-600 text-white text-[20px] font-serif flex flex-row  justify-center"
        />
        <div className="flex flex-row items-center justify-center ">
          <IoSync className="text-4xl mr-2 pt-4 text-blue-500" />
          <p className="mt-4 text-xl">
            Last Sync:
            <span>Today 11:30pm</span>
          </p>
        </div>
        <Button
          icon={
            <span className="flex flex-start items-center justify-center">
              <FaCrown className="h-7 w-7 pl-1 btnIicons" />
            </span>
          }
          value="Go Premium"
          type="button"
          className="w-[45%] h-12 rounded-full p-2 bg-gradient-to-br from-yellow-300 to-yellow-500 text-black text-[20px] font-serif flex flex-row  justify-center mt-5 mb-10"
        />
        <SettingsPath
          value="My Profile"
          icon={
            <div className="bg-blue-700 p-2 text-[30px] rounded-xl ">
              <FaRegSmile />
            </div>
          }
        />
        <SettingsPath
          value="My Favorite"
          icon={
            <div className="bg-blue-700 p-2 text-[30px] rounded-xl">
              <FaRegSmile />
            </div>
          }
        />
        <SettingsDescib value="Setting" />

        <SettingsPath
          value="Workout Settings"
          icon={
            <div className="bg-yellow-600 p-2 text-[30px] rounded-xl">
              <IoMdWater />
            </div>
          }
        />
        <SettingsPath
          value="General Settings"
          icon={
            <div className="bg-yellow-600 p-2 text-[30px] rounded-xl">
              <IoMdSettings />
            </div>
          }
        />
        <SettingsPath
          value="Language Options"
          icon={
            <div className="bg-yellow-600 hover:text-red-500 p-2 text-[30px] rounded-xl">
              <FaGlobe />
            </div>
          }
        />
        <SettingsPath
          value="Apple Health"
          button={<RadioSwitch />}
          icon={
            <div className=" p-2 text-[30px] rounded-xl">
              <FaAppStoreIos />
            </div>
          }
        />
        <SettingsDescib 
        value="Support Us"
         />  

        <SettingsPath 
          value="More Apps"
          icon={
            <div className="bg-gray-400 p-2 text-[30px] rounded-xl">
              <IoGridSharp  />
            </div>
          }
        />
        <SettingsPath 
          value="Remove Ads"
          icon={
            <div className="bg-gray-400 p-2 text-[30px] rounded-xl">
              <RiAdvertisementFill  />
            </div>
          }
        />
        <SettingsPath 
          value="Rate us"
          icon={
            <div className="bg-gray-400 p-2 text-[30px] rounded-xl">
              <FaStar   />
            </div>
          }
        />
        <SettingsPath 
          value="Feedback"
          icon={
            <div className="bg-gray-400 p-2 text-[30px] rounded-xl">
              <IoPencilSharp    />
            </div>
          }
        />

        <p className="mt-5 italic text-lg font-semibold">Version 1.16.7</p>
      </div>
    </>
  );
}

export default Settings;
