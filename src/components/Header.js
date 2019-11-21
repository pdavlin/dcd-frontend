import React from 'react'
import './Header.css'
import { Card, Heading } from 'rebass';
import { AddressForm } from './AddressForm';
import { LoadingBar } from './LoadingBar';
import { useAppContext } from './AppContext';

/**
 * Renders header component, containing all elements of UI except map.
 * @todo rename to reflect expanded functionality. Maybe "Sidebar"?
 */
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
        <br />
      </Card>
    </div>
  )
}