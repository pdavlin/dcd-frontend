import React, { Component } from 'react'
import './Header.css'
import { Card, Heading } from 'rebass';
import { AddressForm } from './AddressForm';

export class Header extends Component {
  render() {
    return (
      <div id='header-wrapper' className='header-wrapper'>
        <Card p={15}>
          <Heading>Douglas County Democracy Project</Heading>
          <br />
          <AddressForm />
        </Card>
      </div>
    )
  }
}