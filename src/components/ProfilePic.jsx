import { CiUser } from "react-icons/ci";
import "./profilepic.css";

function ProfilePic() {
  return (
    <>
      <span className="text-6xl rounded-[1em] p-2 bg-gray-500 mb-5">
        <CiUser />
      </span>
    </>
  );
}

export default ProfilePic;
