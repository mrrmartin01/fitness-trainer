import PropTypes from "prop-types";

function Modal({ video, muscle, instructions, button }) {
  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center text-black justify-center">
        <div className="bg-gray-500  h-fit rounded-lg w-[80%]">
          <div className="w-full rounded-lg bg-red-500 h-2/5">{video}</div>
          <p className="p-2 mt-2 text-xl text-shadow-lg  font-bold uppercase">
            {muscle}
          </p>
          <h2 className="text-md p-2 font-semibold  font-mono tracking-tight">
            {instructions}
          </h2>
          {button}
        </div>
      </div>
    </>
  );
}

Modal.propTypes = {
  video: PropTypes.object,
  muscle: PropTypes.string,
  button: PropTypes.element,
  instructions: PropTypes.string,
};

export default Modal;
