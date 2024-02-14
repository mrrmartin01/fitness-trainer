import { CiUser } from "react-icons/ci";
import InputField from "./InputField";
import "./profilepic.css";
import Button from "./Button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


function ProfilePic() {
  return (
    <div className="flex justify-center items-center flex-col mt-4 w-[fit-content] p-2 mx-auto">
      <span className="text-6xl rounded-[1em] p-2 bg-gray-500 mb-5">
        <CiUser />
      </span>
      <p className="text-xl font-bold text-gray-700 uppercase">Sign in</p>
      <div className="flex justify-start items-start flex-col">
        <InputField
          label="Username"
          placeholder="Enter your username"
          className="w-[400px] h-12 rounded-lg p-2 bg-white border-2 border-gray-300 user-input"
          type="text"
        />

        <InputField
          label="Password"
          placeholder="Enter password"
          className="w-[400px] h-12 rounded-lg p-2 bg-white border-2 border-gray-300 user-input"
          type="password"
        />
        <Button
          value="Sign In"
          onClick={"submit"}
          type="submit"
          className="w-full h-12 rounded-lg p-2 bg-green-500 hover:bg-green-600 text-white font-bold mt-4 submit"
        />
      </div>
      <p className="flex justify-end items-end w-full">
        <span className="cursor-pointer text-gray-600 mt-2 font-serif">
          Forgot Password?
        </span>
      </p>
      <p>OR</p>
      <Button
        icon={
          <span className="flex flex-start items-center justify-center">
            <FaFacebookSquare className="h-7 w-7 btnIicons" />
          </span>
        }
        value="Signin with Facebook"
        onClick={"submit"}
        type="button"
        className="w-full h-12 rounded-lg p-2 bg-[#1454dd] hover:bg-[#1838c9] text-white text-[20px] font-serif mt-4 flex flex-row  justify-center"
      />
      <Button
        icon={
          <span className="flex flex-start items-center justify-center">
            <FcGoogle className="h-7 w-7 btnIicons " />
          </span>
        }
        value="Signin with Google"
        onClick={"submit"}
        type="button"
        className="w-full h-12 rounded-lg p-2 bg-blue-400 hover:bg-blue-500 text-white text-[20px] font-serif mt-4 flex flex-row  justify-center"
      />
      <Button
        icon={
          <span className="flex flex-start items-center justify-center">
            <FaApple className="h-7 w-7 btnIicons " />
          </span>
        }
        value="Signin with Apple"
        onClick={"submit"}
        type="button"
        className="w-full h-12 rounded-lg p-2 bg-[#08090aea] hover:bg-[#020617] text-white text-[20px] font-serif mt-4 flex flex-row  justify-center"
      />

      <a href="/signup" className="mt-4 text-md">Don&apos;t have an account? Signup for free </a>
    </div>


  );
}

export default ProfilePic;