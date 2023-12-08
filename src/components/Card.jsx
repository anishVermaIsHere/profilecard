
const Card = ({card}) => {
  return (
    <div className='card'>
        <div className='card-wrapper'>
            <div className='card-left-container'>
                <img className='absolute md:static inset-x-0 top-[-250%] p-4 md:p-0 bg-white object-fit h-fit mx-auto scale-105 rounded-full' src={card.picture.large} alt={card.name.first} />
            </div>
            <div className='card-right-container'>
                <h4 className='font-semibold text-xl mb-4 text-center md:text-left'>
                    <span className='mr-2 text-blue-500'>{card.name.first}</span>
                    <span className='text-blue-500'>{card.name.last}</span>
                </h4>
                <p className='text-gray-500 mb-2'>{card.email}</p>
                <p className='text-gray-500 mb-2'>{card.gender}</p>
                <p className='text-md mb-2'>{card.dob.date.slice(0,10)}</p>
                <p className='font-semibold text-md text-gray-700'>(M) {card.cell}</p>

            </div>
        </div>
    </div>
  )
}

export default Card