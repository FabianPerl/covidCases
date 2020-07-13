import axios from 'axios';

function getCasesFromCountry (country) {
  return axios.get(`https://api.covid19api.com/total/country/${country}`)
} 

export default getCasesFromCountry;