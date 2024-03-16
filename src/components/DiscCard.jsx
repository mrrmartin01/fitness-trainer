import PropTypes from 'prop-types'

function DiscCard(prop) {
  return (
    <div className={`w-full rounded-lg mt-2 ${prop.className} bg-${prop.img} object-cover`}>
        {prop.value}
    </div>
  )
}

DiscCard.propTypes = {
    className:PropTypes.string,  
    value:PropTypes.string,
}

export default DiscCard

