import { useState, useEffect } from "react";
import Card from "../components/Card";
import Rows from "../components/Rows";
import "./home.css";
import { FaFireFlameCurved } from "react-icons/fa6";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaArrowCircleRight } from "react-icons/fa";
import { SlCalender, SlNote } from "react-icons/sl";
import { GiSharpedTeethSkull  } from "react-icons/gi";
import Marquee from "../components/Marquee";
import Button from "../components/Button";
import LevelsCard from "../components/LevelsCard";
import LevelsCards from "../data/LevelsCards";

function Homepage() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const calculateStreak = () => {
      const currentDate = new Date(); // Getting currrent date

      const storedDate = localStorage.getItem("streakDate");

      // If there is no stored date, set the streak to 1
      if (!storedDate) {
        localStorage.setItem("streakDate", currentDate.toISOString());
        setStreak(1);
        return;
      }

      // Convert the stored date to a Date object
      const storedDateTime = new Date(storedDate);

      // Calculate the difference in hours between the current date and the stored date
      const differenceInHours = (currentDate - storedDateTime) / 3600000;

      // If the difference is less than or equal to 24 hours, increment the streak by 1
      if (differenceInHours <= 24) {
        setStreak((prevStreak) => prevStreak + 1);
      } else {
        setStreak(1);
      }

      localStorage.setItem("streakDate", currentDate.toISOString());
    };

    calculateStreak();
  }, []);

  // let [color, setColor] = useState('#000');

  // const colorChange = () => {
  //   setColor( color=>'#fff');
  // };

  return (
    <>
      <div className=" overflow-x-hidden">
        <div className="cardy">
          <Card>
            <div className="flex flex-row justify-between p-4">
              <div>
                <Rows
                  value={
                    <>
                      <h1>{streak}</h1>
                      <p>Day streak</p>
                      <p className="text-gray-700">
                        Personal best:{streak}
                        <span className="font-bold">
                          {localStorage.getItem("personalBest")}
                        </span>
                      </p>
                    </>
                  }
                />
              </div>
              <div>
                <Rows
                  value={
                    <>
                      <FaFireFlameCurved className="text-[#ea580c]" />
                    </>
                  }
                />
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex flex-row justify-between p-4">
              <div>
                <Rows
                  value={
                    <>
                      <h1>0/3</h1>
                      <p>This week</p>
                      <p className="text-gray-700">
                        <span className="lowercase ">in</span> Total:
                        {Math.ceil(streak / 7)}
                      </p>
                    </>
                  }
                />
              </div>
              <div>
                <Rows
                  value={
                    <SlCalender className="text-blue-500 border-2 border-green-500 p-1 rounded-[20%] w-[90%] h-[90%]" />
                  }
                />
              </div>
            </div>
          </Card>
        </div>
        <button className="flex flex-row cursor-pointer justify-start gap-4 mt-4 text-2xl text-gray-500 font-bold" >
          <p>Recent</p>
          <p>My Plan</p>
        </button>

        <Marquee />
        <Button
          value="Explore all plan(11)"
          icon={
            <div className="text-gray-500 p-2 text-[20px]">
              <BsFillGrid1X2Fill />
            </div>
          }
          className={`bg-gray-700 hover:bg-blue-700 text-white capitalize w-[40%] h-12 rounded-full p-2 m-auto mt-8 flex items-center justify-center`}
          style={{ color: "gray" }}
        />

        <div className="capitalize font-bold text-2xl font-serif tracking-wide mt-8">
          <h2>Classic workouts</h2>
        </div>
        {LevelsCards.map((level) => (
          <div key={level.id} className="mb-5">
            <LevelsCard name={level.name} bg={level.bg_img} image={level.img} />

            {/* Map workouts */}
            <div className="flex flex-wrap justify-center ">
              {level.workouts.map((workout) => (
                <div
                  key={workout.id}
                  className="w-full h-[150px] border-b-2 hover:text-4xl"
                >
                  <div className="flex items-center justify-between h-full bg-gray-800 p-4 cursor-pointer">
                    <div className="w-[20%] h-full">
                      <img
                        src={workout.image}
                        alt={workout.type}
                        className="w-full h-full object-cover rounded-lg"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                      />
                    </div>
                    <div className="flex flex-col justify-center flex-grow mx-3">
                      <span className="text-3xl font-medium">
                        {workout.type} * {level.name}
                      </span>
                      <span className="italic">{workout.duration}</span>
                    </div>
                    <span className="text-white p-3 text-3xl">
                      <FaArrowCircleRight />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <hr className="mt-5" />

      <div className="flex justify-center items-center gap-2 mt-8 ">
        <Button
          value="Adjust the order"
          icon={
            <div className="text-blue-500 p-2 text-[20px]">
              <SlNote />
            </div>
          }
          className={`bg-gray-700 hover:bg-yellow-400 transition duration-[0.3s] ease-linear text-blue-500 text-xl hover:text-2xl font-bold w-full h-[55px] rounded-lg p-2 flex items-center justify-center`}
        />

        <Button
          value="Discover * More workouts"
          icon={
            <div className="text-blue-500 p-2 text-[20px]">
              <SlNote />
            </div>
          }
          className={`bg-gray-700 hover:bg-green-200 transition duration-[0.3s] ease-linear text-blue-500 text-xl hover:text-2xl font-bold w-full h-[55px] rounded-lg p-2 flex items-center justify-center`}
        />
      </div>

      <div className="flex flex-row justify-end text-2xl p-2 mt-5">
        <span className="font-bold italic pr-3">Site By: The_Mis.Fit</span>
        <span className="pl-2 text-5xl bg-gradient-to-t rounded-lg from-yellow-400 via-red-500 to-pink-500 text-blend"><GiSharpedTeethSkull  /></span>
      </div>
      
    </>
  );
}

export default Homepage;
