import { CiUser } from "react-icons/ci";
import InputField from "./InputField";
import "./profilepic.css";

function ProfilePic() {
  return (
    <div className="flex justify-center items-center flex-col mt-4">
      <span className="text-6xl rounded-[1em] p-2 bg-gray-500 mb-5">
        <CiUser />
      </span>
        <InputField
          label={"Username"}
          placeholder="Enter your username"
          className="w-[400px] h-12 rounded-lg p-2 bg-white border-2 border-gray-300 user-input"
          type="text"
        />

        <InputField
          label={"Password"}
          placeholder="Enter password"
          className="w-[400px] h-12 rounded-lg p-2 bg-white border-2 border-gray-300 user-input"
          type="password"
        />
    </div>
  );
}

export default ProfilePic;
