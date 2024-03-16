import { FaCrown} from "react-icons/fa";
// import PropTypes from 'prop-types'

import Button from "./Button";

function GymComponent() {
  return (
    <div className="h-screen">
      <div className="flex flex-col w-full h-[200px] bg-gray-900 p-4 rounded-lg mt-4">
        <div className="flex justify-evenly translate-y-10">
          <div className="flex flex-col ">
            <span>Get Personalized</span>
            <span>Gym Workouts</span>
            <span>with simple questions on your goal &1RM</span>
          </div>
          <div className="w-[50%]">
            <img
              src="www.lol.com/images"
              className="w-[80%] h[350px] object-cover border-2"
            />
          </div>
        </div>
        <div className="flex">
        <Button
          value="START"
          className={
            "w-[20%] text-2xl font-semibold h-[50px] m-auto mt-10 rounded-full bg-gradient-to-br from-green-800 to-red-500"
          }
          type={"submit"}
        />
        </div>
      </div>




      <Button
          value="UPGRADE"
          icon={
            <span className="flex flex-start items-center justify-center">
              <FaCrown className="h-5 w-5 mr-2  text-black" />
            </span>
          }
          className={
            "w-[12%] text-2xl text-black flex flex-row mr-2 justify-center items-center fixed font-semibold h-[50px] right-0 bottom-0  mb-4 rounded-full bg-white"
          }
          type={"submit"}
        />
    </div>
  );
}

GymComponent.propTypes = {};

export default GymComponent;
