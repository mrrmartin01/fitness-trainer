import PropTypes from 'prop-types'

function DescribCards({ id, image, type, duration }) {
  return (
    <div key={id} className="w-full h-[150px] border-b-2 hover:text-4xl">
      <div className="flex items-center justify-between h-full bg-gray-800 p-4 cursor-pointer">
        <div className="w-[20%] h-full">
          <img
            src={image}
            alt={type}
            className="w-full h-full object-cover rounded-full bg-red-400"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
        <div className="flex flex-col justify-center flex-grow mx-3">
          <span className="text-3xl font-medium">{type}</span>
          <span className="italic">{duration}</span>
        </div>
      </div>
    </div>
  );
}

DescribCards.propTypes ={
    id: PropTypes.number,
    image: PropTypes.string,
    type: PropTypes.string,
    duration: PropTypes.string,
}

export default DescribCards;
