import { useParams } from 'react-router-dom'
import LinesChart from './components/LinesChart'

function Graph () {
  const { id, property } = useParams()

  return (
    <div>
      <h2 className='text-xl font-bold mb-4'>{property}</h2>
      <LinesChart id={id} property={property} />
    </div>
  )
}

export default Graph
