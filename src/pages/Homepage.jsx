import { useState, useEffect } from "react";
import Card from "../components/Card";
import Rows from "../components/Rows";
import "./home.css";
import { FaFireFlameCurved } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import Marquee from "../components/Marquee";

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

  return (
    <>
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
                      {
                        Math.ceil(streak / 7)
                      }
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
      <div className="flex flex-row justify-start gap-4 mt-4 text-2xl text-gray-500 font-bold">
        <p>Recent</p>
        <p>My Plan</p>
      </div>

      <Marquee />
    </>
  );
}

export default Homepage;
