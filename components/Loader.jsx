import React from 'react'
import {Html,useProgress} from '@react-three/drei'

const Loader = () => {
  const {progress} = useProgress();
  return (
    <Html>
      <span className='canvas-load'>
        <p
        style={
          {
            color: '#f1f1f1',
            fontSize: 14,
            marginTop: 40,
            fontWeight: 800
            
          }
        }>
          
          {progress.toFixed(2)} % loaded
        </p>
      </span>
    </Html>
  )
}

export default Loader