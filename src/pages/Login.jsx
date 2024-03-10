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
  // login
  const [username, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState("");
  // signup
  const [NewEmail, setNewEmail] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Username:", username);
    // console.log("Password:", Password);

    if (username === "" || Password === "") {
      setError("Please fill all the fields");
    } else if (username !== mockData[0].username) {
      setError("Wrong username");
    } else if (Password !== mockData[0].Password) {
      setError("Wrong password");
    } else if (
      username === mockData[0].username &&
      Password === mockData[0].Password
    ) {
      navigate("/app");
    }
  };

  const signup = (n) => {
    n.preventDefault();
    if (NewEmail === "" && NewPassword === "") {
      alert("Please fill all fields");
    } else if (!NewEmail.includes("@") || !NewEmail.includes(".")) {
      alert("Please enter a valid email");
    } else if (NewPassword === "") {
      alert("Please enter a password");
    } else if (NewEmail === "") {
      alert("Please enter an email");
    } else navigate("/app");
  };

  const handleSignUp = () => {
    setShowSignUpModal(true);
  };

  return (
    <>
      <div className="absolute inset-0">
        <div className="flex justify-center bg-black bg-opacity-25 items-center px-10 flex-col w-[40%] mt-4 rounded-2xl mx-auto">
          <ProfilePic />
          <p className="text-lg font-bold text-gray-700 uppercase">Sign in</p>
          <form className="flex justify-start items-start w-full flex-col">
            <InputField
              label="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full h-10 rounded-lg p-2 bg-white border-2 border-gray-300 user-input"
              type="text"
            />
            <InputField
              label="Password"
              value={Password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-10 rounded-lg p-2 bg-white border-2 border-gray-300 user-input"
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
            <p className="text-red-500 text-sm font-mono">{Error}</p>
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
            className="w-full h-12 rounded-lg p-2 bg-[#1454dd] hover:bg-[#1838c9] text-white text-[20px] font-serif mt-2 flex flex-row  justify-center"
          />
          <Button
            icon={
              <span className="flex flex-start items-center justify-center">
                <FcGoogle className="h-7 w-7 btnIicons " />
              </span>
            }
            value="Signin with Google"
            type="button"
            className="w-full h-12 rounded-lg p-2 bg-blue-400 hover:bg-blue-500 text-white text-[20px] font-serif mt-2 flex flex-row  justify-center"
          />
          <Button
            icon={
              <span className="flex flex-start items-center justify-center">
                <FaApple className="h-7 w-7 btnIicons " />
              </span>
            }
            value="Signin with Apple"
            type="button"
            className="w-full h-12 rounded-lg p-2 bg-[#08090aea] hover:bg-[#020617] text-white text-[20px] font-serif mt-2 flex flex-row  justify-center"
          />
          <a
            onClick={handleSignUp}
            className="mt-2 text-md mb-4 cursor-pointer"
          >
            Don&apos;t have an account? Signup for free{" "}
          </a>
        </div>
      </div>
      {showSignUpModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-center p-8 rounded-xl w-[30%] ">
            <h2 className="text-lg font-semibold capitalize mb-4">Sign Up</h2>
            {
              <form className="flex justify-start items-start w-full flex-col">
                <InputField
                  placeholder="E-mail"
                  value={username}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full h-10 rounded-lg p-2 bg-white border-2 border-gray-300 user-input"
                  type="text"
                />
                <InputField
                  placeholder="Username"
                  value={Password}
                  autoComplete="current-password"
                  onChange={(n) => setNewPassword(n.target.value)}
                  className="w-full h-10 rounded-lg p-2 bg-white border-2 border-gray-300 user-input"
                  type="text"
                />
                <InputField
                  placeholder="Password"
                  value={Password}
                  autoComplete="current-password"
                  onChange={(n) => setNewPassword(n.target.value)}
                  className="w-full h-10 rounded-lg p-2 bg-white border-2 border-gray-300 user-input"
                  type="password"
                />
                <Button
                  value="Sign In"
                  onClick={signup}
                  type="submit"
                  className="w-full h-12 rounded-lg p-2 bg-green-500 hover:bg-green-600 text-white font-bold mt-4 submit"
                />
              </form>
            }
            <Button
              value="Close"
              onClick={() => setShowSignUpModal(false)}
              className="w-[30%] rounded-lg mt-5 p-2 bg-red-400"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
