import Card from "../components/Card";
import './home.css';

function Homepage() {
  return (
    <>
      <div className="cardy">
        <Card className="w-[45%] h-40 rounded-xl bg-gray-500" >
          <span>HEllo</span>
        </Card>
        <Card className="w-[45%] h-40 rounded-xl bg-gray-500" >
          <span>HEllo</span>
        </Card>
      </div>
    </>
  );
}

export default Homepage;
