import React, { useState } from 'react'
import { Box, Button, Text } from 'rebass';
import { Input, Label, Select } from '@rebass/forms';
import { getLatLngFromAddress } from '../services/MapsApiService';
import { useAppContext } from './AppContext';

const elections = {
  '1': { name: 'Douglas County Board' }
}

export const AddressForm = () => {

  const { setLatLngPair, inDistrict } = useAppContext();
  const [address, setAddress] = useState('1819 Farnam Street');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getLatLngFromAddress(address).then(response => {
      if (response.data.status !== "REQUEST_DENIED") {
        setLatLngPair([response.data.results[0].geometry.location.lat, response.data.results[0].geometry.location.lng]);
      } else console.error("uh oh", response)
    })
    setIsSubmitted(true);
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
            defaultValue='Douglas County Board'
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
          (inDistrict === null) ?
            <div>
              <Text color={'error'}>
                Your address wasn't found in any of the districts for that position. Please try another address. 
              </Text> 
              <br />
            </div> 
            : <div>
            <Text>
              Your County Board district is {inDistrict}. 
            </Text> 
            <br />
          </div> 
        }
        <Button
          variant='hoverable'
          width={1 / 2}
          mt={1}
          onClick={
            newSearch
          }>
          New Search
      </Button>
      </div>
    )
  }
}