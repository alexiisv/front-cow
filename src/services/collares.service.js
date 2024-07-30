import axios from 'axios'

const URL_API = import.meta.env.VITE_URL_API

export async function lastByAid (aidCow) {
  return axios.get(`${URL_API}/collares/lastByAid/${aidCow}`)
}

export async function currentDateToSelected (date) {
  return axios.get(`${URL_API}/collares/currentDateToSelected/${date}`)
}

export async function getForLastHours (id, prop, hours) {
  const query = `?aidCow=${id}&hours=${hours}&prop=${prop}`
  return axios.get(`${URL_API}/collares/getForLastHours${query}`)
}

export async function lastThirtyDays (id, prop) {
  return axios.get(`${URL_API}/collares/lastThirtyDays/${id}/${prop}`)
}
