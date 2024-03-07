import PropTypes from "prop-types"

function Modal({video, muscle,instructions, button}) {
   return(
     <>
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center text-black justify-center">
            <div className="bg-white  h-fit rounded-lg w-[80%]">
              <div className="w-full bg-red-500 h-2/5">
                {video}
              </div>
              <p className="p-2 mt-12 uppercase">{muscle}</p>
              <h2 className="text-md p-2 font-semibold  font-mono tracking-tight">
                {instructions}
              </h2>
              {button}
            </div>
          </div>
     </>
  );
}

Modal.propTypes ={
    video:PropTypes.string,
    muscle:PropTypes.string,
    button:PropTypes.element,
    instructions:PropTypes.string,
}

export default Modal;
