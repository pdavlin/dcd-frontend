import axios from 'axios';
import {dcb, sen, com} from '../components/Consts';

const BASE_URL = 'http://dcd.davlin.io/api/';

/**
 * Return a listing of elections with data pertaining to the specified district.
 * @param {string} dist Formatted as [three-letter district ID]-[District #] (e.g., `dcb-1`)
 * @returns {Promise<import('axios').AxiosResponse>} Backend response
 */
const getElectionsForDistrict = async (dist) => {
  return axios.get(`${BASE_URL}elections`, {
    params: {
      dist
    }
  });
}
/**
 * Return a listing of elections with data pertaining to the specified election.
 * @param {string} dist Formatted as [YYYY]-[three-letter district ID]-[District #] (e.g., `2018-dcb-1`)
 * @returns {Promise<import('axios').AxiosResponse>} Backend response
 */
const getResultsForElection = async (elec_id) => {
  return axios.get(`${BASE_URL}elections`, {
    params: {
      elec_id
    }
  });
}
/**
 * Maps a list of election results retrieved from the backend into a single object for display.
 * @param {string} dist Formatted as [three-letter district ID]-[District #] (e.g., `dcb-1`)
 * @returns {[{electionDate: string, electionResults: resultsObject}]} Election data array
 */
export const getResultsForDistrict = async (dist) => {
  const elections = getElectionsForDistrict(dist);
  let districtResults = [];
  elections.forEach(async (election) => {
    districtResults.push(
      {
        electionDate: election.election_date,
        electionResults: await getResultsForElection(election.election_id)
      }
    );
  });
  return districtResults;
}

/**
 * Maps a list of district bounds retrieved from the backend into a single object for display.
 * @param {string} dist Formatted as [three-letter district ID] (e.g., `dcb`)
 * @returns {[{electionDate: string, electionResults: resultsObject}]} Election data array
 */
export const getDistrictCoordsForId = async (id) => {
  if (id === 'dcb') {
    return dcb;
  } else if (id === 'sen') {
    return sen;
  } else if (id === 'com') {
    return com;
  }

}