import React from 'react'
import './Header.css'
import { Card, Heading } from 'rebass';
import { AddressForm } from './AddressForm';

export const Header = () => {
  return (
    <div id='header-wrapper' className='header-wrapper'>
      <Card
        p={15}
        sx={{
          borderRadius: 12,
          maxWidth:431.217
        }}>
        <Heading>Douglas County Democracy Project</Heading>
        <br />
        <AddressForm />
      </Card>
    </div>
  )
}