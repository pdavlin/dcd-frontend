import React from 'react'
import './Header.css'
import { Card, Heading } from 'rebass';
import { AddressForm } from './AddressForm';
import { LoadingBar } from './LoadingBar';
import { useAppContext } from './AppContext';

export const Header = () => {
  const { isLoading } = useAppContext();

  return (
    <div id='header-wrapper' className='header-wrapper'>
      <Card
        p={15}
        sx={{
          borderRadius: 12,
          maxWidth: 431.217
        }}>
        <Heading>Douglas County Democracy Project</Heading>
        <br />
        <AddressForm />
        {isLoading ? <LoadingBar /> : null}
      </Card>
    </div>
  )
}