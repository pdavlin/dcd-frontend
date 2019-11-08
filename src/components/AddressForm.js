import React, { useState } from 'react'
import { Box, Button } from 'rebass';
import { Input, Label } from '@rebass/forms';
import { getLatLngFromAddress } from '../services/MapsApiService';
import { useAppContext } from './AppContext';

export const AddressForm = (props) => {

  const { setLatLngPair } = useAppContext();
  const [address, setAddress] = useState('1819 Farnam Street');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getLatLngFromAddress(address).then(response => {
      if (response.data.status !== "REQUEST_DENIED") {
        console.log(response);
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
        </Box>
        <Button
          variant='hoverable'
          width={1 / 2}
          mt={1}
          sx={{
            ':hover': {
              backgroundColor: 'primary',
              color: 'background'
            }
          }} >Submit</Button>
      </Box>
    )
  } else {
    return (
      <Button
        variant='hoverable'
        width={1 / 2}
        mt={1}
        sx={{
          ':hover': {
            backgroundColor: 'primary',
            color: 'background'
          }
        }}
        onClick={
          newSearch
        }>
        New Search
      </Button>
    )
  }
}