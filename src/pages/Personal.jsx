import { FaCrown } from "react-icons/fa";
import Button from "../components/Button";
function Personal() {
  return (
    <>
      <h1 className="uppercase text-2xl font-bold tracking-wider">
        Personal plan
      </h1>

      <div className="mt-[10%]">
        <FaCrown className="bg-yellow-500 text-6xl rounded-full p-2 mb-[1%]" />
      </div>
      <div className="uppercase text-4xl font-bold italic">
        <h2>Unlock your</h2>
        <h2>Personalized plan</h2>
        <h2 className="text-blue-700">Build muscle</h2>
      </div>

      <div className="mt-[5%]  flex flex-col items-center justify-center">
        <div className="flex justify-between w-full h-[2px] mb-[1%]">
          <hr className="w-[30%] text-red-500" />
          <hr className="w-[30%] text-red-500" />
        </div>

        <h3 className="text-2xl font-semibold italic tracking-[5px] mb-[1%]">
          Just try a few days for free. The first week is on us
          <span className="transform-2">!</span>
        </h3>

        <div className="flex justify-between w-full ">
          <hr className="w-[35%] text-red-500" />
          <hr className="w-[35%] text-red-500" />
        </div>
        <Button
          value="UNLOCK"
          className={
            "w-[35%] text-2xl m-[7%] font-bold h-20 rounded-full p-2 bg-gradient-to-br from-blue-400 to-blue-700"
          }
          type={"submit"}
        />
      </div>
    </>
  );
}

export default Personal;
