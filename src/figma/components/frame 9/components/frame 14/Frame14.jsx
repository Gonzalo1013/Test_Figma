import React from 'react'
import { SpecialPrice } from './specialPrice/SpecialPrice'
import { Frame13 } from './frane13/Frame13'
import { Frame4599 } from './frame4599/Frame4599'
import { Frame4688 } from './frame4688/Frame4688'
import { Frame1484578044 } from './frame1484578044/Frame1484578044'
import { Frame1000004689 } from './frame1000004689/Frame1000004689'
import './frame14.scss'


export const Frame14 = () => {
  return (
    <div className='container_frame14'>
      <SpecialPrice />
      <Frame13 />
      <Frame4599/>
      <Frame4688 />
      <Frame1000004689/>
      <Frame1484578044/>
    </div>
  )
}


