import axios from 'axios';

function getPrognoseFromCountry (day1 = 0, day2 = 0, day3 = 0) {
  return axios.get(`http://localhost:7071/api/prognose?day1=${day1}&day2=${day2}&day3=${day3}`)
} 

export default getPrognoseFromCountry;