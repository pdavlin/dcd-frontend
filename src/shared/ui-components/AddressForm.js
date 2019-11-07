import React, { Component } from 'react'
import { Box, Button } from 'rebass';
import { Input, Label } from '@rebass/forms';
import { getLatLngFromAddress } from './../services/MapsApiService';

export class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = { address: '123 Main St' }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(event) {
    // alert(this.state.address);
    event.preventDefault();
    await getLatLngFromAddress(this.state.address).then(response => {
      if(response.data.status !== "REQUEST_DENIED") {
        console.log(response);
        alert('Lat is: ' + response.data.results[0].geometry.location.lat + ' lng is: ' + response.data.results[0].geometry.location.lng)
      } else console.error("uh oh", response)
    })
  }
  handleChange(event) {
    this.setState({ address: event.target.value })
  }
  render() {
    return (
      <Box
        as='form'
        onSubmit={
          this.handleSubmit
        }
        width={1}>
        <Box width={1}>
          <Label htmlFor='address'>Enter the <b>&nbsp;first line&nbsp;</b> of your street address:</Label>
          <Input
            id='address'
            name='address'
            // defaultValue='123 Main St'
            sx={{
              ':focus': {
                borderColor: 'primary',
                boxShadow: '0 0 0 2px #55d6be'
              }
            }}
            value={this.state.address}
            onChange={e => this.handleChange(e)}
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