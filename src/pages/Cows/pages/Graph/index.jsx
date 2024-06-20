import { useParams } from 'react-router-dom'
import LinesChart from './components/LinesChart'

function Graph () {
  const { id, property } = useParams()

  return (
    <div>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl font-bold mb-4'>{property}</h2>
        <p className='text-sm text-gray-500'>Graph of the last 30 days</p>
      </div>
      <LinesChart id={id} property={property} />
    </div>
  )
}

export default Graph
