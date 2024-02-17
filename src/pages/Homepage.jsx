import Card from "../components/Card";
import './home.css';

function Homepage() {
  return (
    <>
      <div className="cardy">
        <Card className="w-[45%] h-40 rounded-xl bg-gray-500">
         <div className="flex flex-row justify-between p-4">
          <div>
            <span className="">Hello</span>
          </div>
            <span className="">Hello</span>
         </div>
        </Card>
        <Card className="w-[45%] h-40 rounded-xl bg-gray-500">
          <span>Hello</span>
        </Card>
      </div>
    </>
  );
}

export default Homepage;
