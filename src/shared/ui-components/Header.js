import React, { Component } from 'react'
import './Header.css'
import { Box, Button, Card, Heading } from 'rebass';
import { Input, Label } from '@rebass/forms';
import { getLatLngFromAddress } from './../services/MapsApiService';

// export class Header extends Component {
//   render() {
//     return (
//       <div class="title-container">
//         <div >Douglas County Democracy Project</div><br />
//         <Button variant='primary' mr={2}>Primary</Button>
//       </div>
//     )
//   }
// }
const sayAddress = () => {
  alert("heck");
}

export class Header extends Component {
  render() {
    return (
      <div id='header-wrapper' class='header-wrapper'>
        <Card p={15}>
          <Box
            as='form'
            onSubmit={
              e => {
                e.preventDefault()
                sayAddress()
              }
            }
            width={1}>
            <Heading>
              Douglas County Democracy Project</Heading><br />
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
        </Card>
      </div>
    )
  }
}