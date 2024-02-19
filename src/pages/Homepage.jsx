import { useState, useEffect } from "react";
import Card from "../components/Card";
import Row from "../components/Row";
import "./home.css";
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaSquareFull } from "react-icons/fa";

function Homepage() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const calculateStreak = () => {
      // Get the current date and time
      const currentDate = new Date();

      // Get the stored date and time from local storage
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
        // Otherwise, set the streak to 1
        setStreak(1);
      }

      // Update the stored date to the current date
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
              <Row
                value={
                  <>
                    <h1>{streak}</h1>
                    <p>Day streak</p>
                    <p className="text-gray-700">
                      Personal best:{" "}
                      <span className="font-bold">
                        {localStorage.getItem("personalBest") || "0"}
                      </span>
                    </p>
                  </>
                }
              />
            </div>
            <div>
              <Row
                value={
                  <>
                    <FaFireFlameCurved className="text-[#ea580c]" />
                    <span className="pl-2">{streak}</span>
                  </>
                }
              />
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-row justify-between p-4">
            <div>
              <Row
                value={
                  <>
                    <h1>0/3</h1>
                    <p>This week</p>
                    <p className="text-gray-700">
                      <span className="lowercase ">in</span> Total:
                      {
                        // Calculate the number of weeks the app has been used
                        Math.ceil(streak / 7)
                      }
                    </p>
                  </>
                }
              />
            </div>
            <div>
              <Row
                value={
                  <FaSquareFull className="text-blue-500 border-solid border-2 border-green-500 p-1 rounded-lg" />
                }
              />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Homepage;
