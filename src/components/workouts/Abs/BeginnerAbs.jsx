import { useState, useEffect } from "react";
import Modal from "../../Modal";
import Loader from "../../Loader"; // Import Loader component

function BeginnerAbs() {
  const [abs, setAbs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [loading, setLoading] = useState(true); // State variable to control loader visibility

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
        setLoading(false); // Hide loader when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Hide loader in case of error
      });
  }, []);

  const openModal = (item) => {
    setModalContent(item);
    setShowModal(true);
  };

  return (
    <>
      <p className="uppercase">Beginner abs</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {loading ? (
          <Loader /> // Show loader while data is being fetched
        ) : (
          abs.map((item) => (
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
                <p className="text-md font-semibold capitalize ">
                  {item.muscle} * {item.difficulty}
                </p>
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
          ))
        )}
        {showModal && (
          <>
            <Modal
              video={
                // Conditional rendering for video or loader
                loading ? <Loader /> : <iframe className="w-full h-[300px]" src={modalContent.video} />
              }
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

export default BeginnerAbs;
