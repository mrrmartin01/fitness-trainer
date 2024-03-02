import PropTypes from "prop-types";

function LevelsCard({ name, image, bg }) {
  return (
    <>
      <div className="w-full h-[300px] flex flex-row justify-between mt-10">
        <div
          className="flex flex-col gap-2 p-2 w-[50%] bg-center bg-cover"
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
            className="w-full h-full object-cover rounded-r-lg "
          />
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
