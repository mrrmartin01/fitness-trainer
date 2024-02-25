import Button from "../components/Button";
import ProfilePic from "../components/ProfilePic";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoSync } from "react-icons/io5";
import { FaCrown } from "react-icons/fa";

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
          <p className="mt-4 text-xl">Last Sync:
          <span>Today 11:30pm</span></p>
        </div>
        <Button
          icon={
            <span className="flex flex-start items-center justify-center">
              <FaCrown className="h-7 w-7 pl-1 btnIicons" />
            </span>
          }
          value="Go Premium"
          type="button"
          className="w-[45%] h-12 rounded-full p-2 bg-gradient-to-br from-yellow-300 to-yellow-500 text-black text-[20px] font-serif flex flex-row  justify-center mt-5"
        />
      </div>
    </>
  );
}

export default Settings;
