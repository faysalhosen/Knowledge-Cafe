
import PropTypes from 'prop-types'

const ReadingTime = ({readingTime}) => {
  return (
    <div>
      <h1 className='font-semibold text-lg text-sky-700'>Spent time on read: {readingTime} min</h1>
    </div>
  )
}

ReadingTime.propTypes = {
readingTime: PropTypes.number.isRequired
}

export default ReadingTime
