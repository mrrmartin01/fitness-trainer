import { useState, useEffect } from "react";
import Modal from "/../components/Modal";

function BeginnerAbs() {
  const [abs, setAbs] = useState([]);
  const [showModal, setShowModal] = useState(false); // State variable to control modal visibility
  const [modalContent, setModalContent] = useState({}); // State variable to store modal content

  useEffect(() => {
    fetch("http://localhost:5173/data/workouts/abs/Beginner.json")
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
    setModalContent(item); // Set modal content based on the selected item
    setShowModal(true); // Set showModal to true when button is clicked
  };

  return (
    <>
    <p>ABS</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {abs.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-gray-700">
              <p className="text-2xl font-bold capitalize mb-2">{item.name}</p>
              <p className="text-md font-semibold capitalize ">{item.muscle} * {item.difficulty}</p>
              <p className="text-sm">{item.type}</p>
              <p className="text-sm capitalize mb-4">{item.equipment}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => openModal(item)}
                  className="px-4 py-2 w-full bg-red-500 text-center font-bold text-white rounded-md hover:bg-red-600 transition duration-300"
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
          video = {modalContent.video}
          muscle = {modalContent.muscle}
          instructions = {modalContent.instructions}
          button ={<button
            onClick={() => setShowModal(false)}
            className="px-4 ml-2 mb-2  bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
          >
            Close
          </button>}
          />

          
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center text-black justify-center">
            <div className="bg-white  h-fit rounded-lg w-[80%]">
              <div className="w-full bg-red-500 h-2/5">
                {modalContent.video}
              </div>
              <p className="p-2 mt-12 uppercase">{modalContent.muscle}</p>
              <h2 className="text-md p-2 font-semibold  font-mono tracking-tight">
                {modalContent.instructions}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 ml-2 mb-2  bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
          </>
        )}
      </div>
    </>
  );
}

export default BeginnerAbs;
