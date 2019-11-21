import React, { useState, useEffect } from 'react'
import { Box, Button, Text } from 'rebass';
import { Input, Label, Select } from '@rebass/forms';
import { getLatLngFromAddress } from '../services/MapsApiService';
import { useAppContext } from './AppContext';
import { ElectionGraph } from './ElectionGraph';

const elections = {
  '1': { name: 'Douglas County Board of Commissioners' }
}
/**
 * Renders an interactive form for entering an address and displaying lookup results.
 */
export const AddressForm = () => {

  const { setLatLngPair, inDistrict, isLoading, setIsLoading } = useAppContext();
  const [address, setAddress] = useState('1819 Farnam Street');
  const [lastAddress, setLastAddress] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [displayResults, setDisplayResults] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isLoading === false && inDistrict === null) {
      setDisplayError(true);
      setErrorMessage('That address wasn\'t found in any of the districts for that position. Please try another address.')
    } else if (isLoading === false && inDistrict !== null) {
      setDisplayResults(true);
    }
  }, [inDistrict, isLoading])

  /**
   * Submits new address info to backend service for geolocation, and awaits results for display.
   */
  const submitNewAddress = async () => {
    await getLatLngFromAddress(address).then(response => {
      if (response.data.status !== "REQUEST_DENIED") {
        setLatLngPair([response.data.results[0].geometry.location.lat, response.data.results[0].geometry.location.lng]);
      } else {
        console.error("API Error", response)
        setErrorMessage('There was a problem contacting the Google Maps API.');
        setDisplayError(true);
        setIsLoading(false)
      }
    });
  }

  /**
   * Sets loading state in UI, organizes information, and sends to backend if needed. 
   * @param {*} event 
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisplayResults(false);
    setIsSubmitted(true);
    setIsLoading(true);
    if (address !== lastAddress) {
      setLastAddress(address);
      await submitNewAddress();
    } else {
      setDisplayResults(true);
      setIsLoading(false);
    }
  }

  const newSearch = () => {
    setIsSubmitted(false);
  }

  if (!isSubmitted) {
    return (
      <Box as='form' onSubmit={handleSubmit} width={1}>
        <Box width={1}>
          <Label htmlFor='address'>Enter the <b>&nbsp;first line&nbsp;</b> of your street address:</Label>
          <Input
            id='address'
            name='address'
            sx={{
              ':focus': {
                borderColor: 'primary',
                boxShadow: '0 0 0 2px #55d6be'
              }
            }}
            value={address}
            onChange={({ target }) => { setAddress(target.value) }}
          />
          <Label htmlFor='election' pt={1}>Select an <b>&nbsp;election&nbsp;</b> to search for.</Label>
          <Select
            id='election'
            name='election'
            defaultValue='Douglas County Board of Commissioners'
            sx={{
              ':focus': {
                borderColor: 'primary',
                boxShadow: '0 0 0 2px #55d6be'
              }
            }}>
            {Object.entries(elections).map(([key, election]) => (
              <option
                key={key}>
                {election.name}
              </option>
            ))}
          </Select>
        </Box>
        <Button
          variant='hoverable'
          width={1 / 2}
          mt={1}
        >Submit</Button>
      </Box>
    )
  } else {
    return (
      <div>
        {
          displayError ?
            <Text color={'error'}>{errorMessage}</Text> : null
        }
        {
          displayResults ?
            <div>
              <Text>
                Your Douglas County Board of Commissioners district is {inDistrict}.
              </Text>
              <ElectionGraph
                election={{
                  win: { votes: 18452, name: "Winning Candidate" },
                  lose: { votes: 11167, name: "Losing Candidate" },
                  other: { votes: 1642, name: "Other votes" }
                }}
              />
              <br />
            </div> : null
        }
        {!isLoading ?
          <Button
            variant='hoverable'
            width={1 / 2}
            mt={1}
            onClick={
              newSearch
            }>
            New Search
          </Button> : null
        }
      </div>
    )
  }
}