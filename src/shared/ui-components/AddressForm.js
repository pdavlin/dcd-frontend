import React, { Component } from 'react'
import { Box, Button } from 'rebass';
import { Input, Label } from '@rebass/forms';

const sayAddress = () => {
  alert("heck");
}

export class AddressForm extends Component {
  render() {
    return (
      <Box
        as='form'
        onSubmit={
          e => {
            e.preventDefault()
            sayAddress()
          }
        }
        width={1}>
        <Box width={1}>
          <Label htmlFor='address'>Address</Label>
          <Input
            id='address'
            name='address'
            defaultValue='123 Main St'
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
  }
}