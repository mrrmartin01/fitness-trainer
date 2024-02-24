import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import ProfilePic from "../components/ProfilePic";

const mockData = [{ username: "test", Password: "123" }];
function Login() {
  const [username, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState("");

  console.log(username);

  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", Password);

    if (username === "" || Password === "") {
      setError("Please enter your username and password");
    } else if (
      username !== mockData[0].username ||
      Password !== mockData[0].Password
    ) {
      setError("Wrong username or password");
    } else if (
      username === mockData[0].username &&
      Password === mockData[0].Password
    ) {
      navigate("/Home");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col mt-4 w-[fit-content] p-2 mx-auto">
        <ProfilePic />
        <p className="text-xl font-bold text-gray-700 uppercase">Sign in</p>
        <form className="flex justify-start items-start flex-col">
          <InputField
            label="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your username"
            className="w-[400px] h-12 rounded-lg p-2 bg-white border-2 border-gray-300 user-input"
            type="text"
          />

          <InputField
            label="Password"
            value={Password}
            autoComplete = "current-password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-[400px] h-12 rounded-lg p-2 bg-white border-2 border-gray-300 user-input"
            type="password"
          />
          <Button
            value="Sign In"
            onClick={handleSubmit}
            type="submit"
            className="w-full h-12 rounded-lg p-2 bg-green-500 hover:bg-green-600 text-white font-bold mt-4 submit"
          />
        </form>
        {Error !== "" && (
          <p className="text-red-500 text-sm font-serif">{Error}</p>
        )}
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
          type="button"
          className="w-full h-12 rounded-lg p-2 bg-[#08090aea] hover:bg-[#020617] text-white text-[20px] font-serif mt-4 flex flex-row  justify-center"
        />

        <a href="/signup" className="mt-4 text-md">
          Don&apos;t have an account? Signup for free{" "}
        </a>
      </div>
    </>
  );
}

export default Login;
