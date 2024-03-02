import PropTypes from "prop-types";

function LevelsCard({ name, image, bg }) {
  return (
    <>
      <div className="w-full h-[200px] rounded-lg flex flex-row justify-between mb-2 border-2 border-sky-300">
        <div
          className="flex flex-col gap-2 p-2 w-[50%] bg-center bg-cover rounded-l-lg"
          style={{ backgroundImage: `url(${bg})`, opacity: 0.7 }}
        >
          <span className="font-semibold text-[500%] font-mono italic">
            5 Workouts
          </span>
          <span className="text-[200%] font-serif">{name}</span>
        </div>

        <div className="w-[50%]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-r-lg opacity-70"
          />
        </div>
      </div>

      <div className="w-full h-[100px] border-b-2 border-red-400 bg-blue-500 mb-2">
        <div className="flex items-center justify-between p-3 h-full">
          <div className="w-[50%] h-full">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-r-lg opacity-70"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
          <div className="flex flex-col justify-center flex-grow mx-3">
            <span className="text-white font-medium">{name}</span>
          </div>
            <span className="text-white opacity-70">--</span>
        </div>
      </div>
    </>
  );
}

LevelsCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};

export default LevelsCard;
