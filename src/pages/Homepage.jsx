import Card from "../components/Card";
import Row from "../components/Row";
import "./home.css";
import { FaHome } from "react-icons/fa";

function Homepage() {
  return (
    <>
      <div className="cardy">
        <Card>
          <div className="flex flex-row justify-between p-4">
            <div>
              <Row
                value={
                  <>
                    <h1>0</h1>
                    <p>Day streak</p>
                    <p className="text-gray-700">
                      Personal best:
                      {
                        //! Script to calculate streaks//
                      }
                    </p>
                  </>
                }
              />
            </div>
            <div>
              <Row value={<FaHome />} />
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
                        //! Script to calculate the number of weeks the app has been used
                      }
                    </p>
                  </>
                }
              />
            </div>
            <div>
              <Row />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Homepage;
