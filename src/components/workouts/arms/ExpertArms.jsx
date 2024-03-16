import { useState, useEffect } from "react";
import Modal from "../../Modal";
import Heading from "../../Heading";

function ExpertArms() {
  const [abs, setAbs] = useState([]);
  const [showModal, setShowModal] = useState(false); 
  const [modalContent, setModalContent] = useState({}); 

  useEffect(() => {
    fetch("http://localhost:5173/data/workouts/arms/Expert.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((res) => {
        setAbs(res);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const openModal = (item) => {
    setModalContent(item); 
    setShowModal(true); 
  };

  return (
    <>
    <Heading value={'Expert Arms'} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {abs.map((item) => (
          <div
            key={item.id}
            className="rounded-lg shadow-2xl overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-black">
              <p className="text-2xl font-bold capitalize mb-2">{item.name}</p>
              <p className="text-md font-semibold capitalize ">
                {item.muscle} * {item.difficulty}
              </p>
              <p className="text-sm">{item.type}</p>
              <p className="text-sm capitalize mb-4">{item.equipment}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => openModal(item)}
                  className="px-4 py-2 w-full bg-sky-500 text-center font-bold text-white rounded-md hover:bg-sky-600 transition duration-300"
                >
                  Start Workout
                </button>
                <p className="text-sm text-gray-500">{item.duration}</p>
              </div>
            </div>
          </div>
        ))}
        {showModal && (
          <>
            <Modal
              video={<iframe className = "w-full h-[300px]" src={modalContent.video}/>}
              muscle={modalContent.muscle}
              instructions={modalContent.instructions}
              button={
                <button
                  onClick={() => setShowModal(false)}
                  className="ml-[30%] mb-4 w-[300px] h-[35px] font-bold hover:border-b-2 hover:border-r-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 italic transition duration-300"
                >
                  Close
                </button>
              }
            />
          </>
        )}
      </div>
    </>
  );
}

export default ExpertArms;
