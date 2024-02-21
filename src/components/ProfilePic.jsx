import { CiUser } from "react-icons/ci";
import "./profilepic.css";

function ProfilePic() {
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-4 w-[fit-content]  mx-auto">
        <span className="text-6xl rounded-[1em] p-2 bg-gray-500 mb-5">
          <CiUser />
        </span>
      </div>
    </>
  );
}

export default ProfilePic;
