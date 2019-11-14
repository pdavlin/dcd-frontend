import React from 'react'
import './Header.css'
import { Card, Heading } from 'rebass';
import { AddressForm } from './AddressForm';
import { LoadingBar } from './LoadingBar';
import { useAppContext } from './AppContext';
import { ElectionGraph } from './ElectionGraph';

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
        <ElectionGraph
          win={34000}
          lose={24000}
          other={400}
          />
          <ElectionGraph
          win={20}
          lose={10}
          other={5}
          />
      </Card>
    </div>
  )
}