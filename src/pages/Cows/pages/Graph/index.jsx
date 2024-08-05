import { useParams } from 'react-router-dom'
import LinesChart from './components/LinesChart'
import { useEffect, useState } from 'react'
import { getForLastHours } from '@/services/collares.service'
import toast from 'react-hot-toast'

function Graph () {
  const { id, property } = useParams()
  const [timeline, setTimeline] = useState('1')
  const [loading, setLoading] = useState(true)
  const [dataPoints, setDataPoints] = useState([])

  const currentDate = new Date().toISOString().split('T')[0]

  useEffect(() => {
    console.log('timeline onCange', timeline)

    const getDataPoinst = async () => {
      setLoading(true)
      try {
        const response = await getForLastHours(id, property, timeline)
        setDataPoints(response.data)
      } catch (error) {
        setDataPoints([])
        toast.error(error.response.data.message)
      } finally {
        setLoading(false)
      }
    }

    getDataPoinst()
  }, [timeline])

  return (
    <div>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-xl font-bold'>{property}</h2>
        <div className='flex gap-4 items-center'>
          <span className='w-full text-right'>{currentDate}</span>
          <select
            id='time'
            value={timeline}
            onChange={(event) => setTimeline(event.target.value)}
            className='w-64 bg-slate-50 py-1 px-2 border border-slate-300 text-sm rounded-lg hover:bg-slate-50 focus:bg-slate-50 focus:ring-slate-500 focus:border-slate-500 block focus:outline-none transition duration-150 ease-in-out'
          >
            <option value='1'>Last hour</option>
            <option value='6'>Last 6 hours</option>
            <option value='12'>Last 12 hours</option>
            <option value='24'>Last 24 hours</option>
          </select>
        </div>
      </div>
      {loading
        ? <p>Loading...</p>
        : <LinesChart dataPoints={dataPoints} property={property} />}
    </div>
  )
}

export default Graph
