import { useState, useEffect } from "react";

function BeginnerAbs() {
  const [abs, setAbs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/data/workouts/abs/Beginner.json")
      .then((res) => {
        if (!res.ok) { throw new Error("Network response was not ok");}
        return res.json()})
      .then((res) => { setAbs(res)})
      .catch((error) => {console.error("Error fetching data:", error)});
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
      {abs.map((item) => (
          <div key={item.id} className="bg-red-500 h-[250px]">
            <div className="flex flex-col items-center justify-center">
                <img src={item.image} className="bg-blue-500 w-full h-48 object-cover"/>
            </div>
            {item.id}
          <p className="font-bold">{item.name}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BeginnerAbs;
