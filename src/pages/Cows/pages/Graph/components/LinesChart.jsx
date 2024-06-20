import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { lastThirtyDays } from '@/services/collares.service'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const chartOptions = {
  plugins: {
    legend: {
      display: false
    }
  },
  slices: 5
}

function LinesChart ({ id, property }) {
  const [dataPoints, setDataPoints] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCurrentDateToSelected()
  }, [id])

  const getCurrentDateToSelected = async () => {
    setLoading(true)
    try {
      const response = await lastThirtyDays(id, property)
      console.log(response.data)
      setDataPoints(response.data)
    } catch (error) {
      console.log('Error fetching collar data: ', error)
    } finally {
      setLoading(false)
    }
  }

  const chartData = {
    labels: dataPoints.map(point => point.timestamp),
    datasets: [
      {
        label: property,
        data: dataPoints.map(point => point.value),
        tension: 0.3,
        fill: false,
        borderColor: 'rgb(75, 192, 192)'
      }
    ]
  }

  if (loading) return <p>Loading...</p>

  return <Line data={chartData} options={chartOptions} />
}

export default LinesChart
