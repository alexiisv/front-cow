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

function LinesChart ({ dataPoints, property }) {
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

  return <Line data={chartData} options={chartOptions} />
}

export default LinesChart
