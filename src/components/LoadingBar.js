import React from 'react';
import './LoadingBar.css';
import { Text } from 'rebass';

export const LoadingBar = () => {
  return (
    <div>
      <Text>Loading...</Text>
      <div className="load-2">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  )
}